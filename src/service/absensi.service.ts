import { AbsensiRepository } from "../repository/absensi.repository";
import { AbsensiSettingService } from "./absensiSetting.service";
import { JadwalAbsensi, StatusAbsensi } from "../../dist/generated";
import cron from "node-cron";

export class AbsensiService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private settingService: AbsensiSettingService,
    private jadwalRepo: {
      findActiveSchedule: (
        kelasId: number,
        now: Date,
        jadwalId?: number,
      ) => Promise<JadwalAbsensi | null>;
    },
  ) {}

  // ===============================
  // ABSEN HADIR / TELAT / DLL
  // ===============================
  async absenHadir(
    userId: number,
    kelasId: number,
    status: StatusAbsensi,
    jadwalId?: number,
  ) {
    const now = new Date();

    // 1️⃣ Ambil setting kelas
    const setting = await this.settingService.getByKelas(kelasId);
    if (!setting) throw new Error("Admin belum mengatur absensi kelas");

    // 2️⃣ Ambil jadwal aktif
    const jadwal = await this.jadwalRepo.findActiveSchedule(
      kelasId,
      now,
      jadwalId,
    );
    if (!jadwal) throw new Error("Tidak ada jadwal absensi aktif");

    // 3️⃣ Hitung absensi hari ini
    const todayCount = await this.absensiRepo.countTodayByUser(userId);
    if (todayCount >= setting.maxAbsen) {
      throw new Error(
        `Absensi hari ini sudah mencapai batas (${setting.maxAbsen}x)`,
      );
    }

    // 4️⃣ Simpan absensi
    return this.absensiRepo.create({
      userId,
      kelasId,
      jadwalId: jadwal.id,
      status,
      tanggal: now,
    });
  }

  // ===============================
  // IZIN → ABSENSI (SETELAH DISETUJUI)
  // ===============================
  async absenIzinDariPersetujuan(
    userId: number,
    kelasId: number,
    tanggal: Date,
  ) {
    const setting = await this.settingService.getByKelas(kelasId);
    if (!setting) throw new Error("Setting absensi belum ada");

    // HITUNG NON-IZIN SAJA
    const nonIzinCount = await this.absensiRepo.countNonIzinAbsensiByTanggal(
      userId,
      tanggal,
    );
    if (nonIzinCount >= setting.maxAbsen) {
      throw new Error(
        `Izin ditolak otomatis: batas absensi (${setting.maxAbsen}) tercapai`,
      );
    }

    // Cegah double absensi
    const exists = await this.absensiRepo.findByUserAndTanggal(userId, tanggal);
    if (exists) return exists;

    return this.absensiRepo.create({
      userId,
      kelasId,
      tanggal,
      status: "izin",
    });
  }

  // ===============================
  // GETTER
  // ===============================
  getTodayByUser(userId: number) {
    return this.absensiRepo.getTodayByUser(userId);
  }

  getByUserId(userId: number) {
    return this.absensiRepo.getByUserId(userId);
  }

  getAll() {
    return this.absensiRepo.getAll();
  }

  // ===============================
  // UPDATE & DELETE
  // ===============================
  updateAbsensi(id: number, data: Partial<{ status: StatusAbsensi }>) {
    return this.absensiRepo.update(id, data);
  }

  deleteAbsensi(id: number) {
    return this.absensiRepo.delete(id);
  }

  getByKelas = async ({
    kelasId,
    page,
    limit,
    sort,
  }: {
    kelasId: number;
    page: number;
    limit: number;
    sort: "asc" | "desc";
  }) => {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.absensiRepo.findByKelasPaginated({
        kelasId,
        skip,
        take: limit,
        sort,
      }),
      this.absensiRepo.countByKelas(kelasId),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPage: Math.ceil(total / limit),
      },
    };
  };

  //   generateDailyAbsensiStatus = async (
  //   userId: number,
  //   kelasId: number,
  //   tanggal: Date,
  // ) => {
  //   const setting = await this.settingService.getByKelas(kelasId);
  //   if (!setting?.maxAbsen) return;

  //   // Hitung absensi hari itu
  //   const absensiHariIni = await this.absensiRepo.countUserAbsensiByTanggal(
  //     userId,
  //     tanggal,
  //   );

  //   // Jika absensi kurang dari maxAbsen, sisa slot dianggap alpha
  //   const alphaCount = setting.maxAbsen - absensiHariIni;

  //   // Tandai sisa slot sebagai alpha (optional, bisa simpan di tabel absensi)
  //   for (let i = 0; i < alphaCount; i++) {
  //     await this.absensiRepo.create({
  //       userId,
  //       kelasId,
  //       tanggal,
  //       status: StatusAbsensi.alpha, // status khusus
  //     });
  //   }
  // };

  async generateDailyAbsensiStatus(
    userId: number,
    kelasId: number,
    tanggal: Date,
  ) {
    const setting = await this.settingService.getByKelas(kelasId);
    if (!setting?.maxAbsen) return;

    // Hitung absensi user di tanggal itu
    const absensiHariIni = await this.absensiRepo.countUserAbsensiByTanggal(
      userId,
      tanggal,
    );

    // Sisa slot dianggap alpha
    const alphaCount = setting.maxAbsen - absensiHariIni;
    if (alphaCount <= 0) return;

    for (let i = 0; i < alphaCount; i++) {
      await this.absensiRepo.create({
        userId,
        kelasId,
        tanggal,
        status: StatusAbsensi.alpha,
      });
    }
  }

  // Fungsi generate alpha otomatis untuk semua user dan semua kelas di tanggal tertentu
  async generateAlphaForAll(date: Date) {
    const semuaSetting = await this.settingService.getAll();
    for (const setting of semuaSetting) {
      const kelasId = setting.kelasId;

      // Ambil semua santri di kelas ini
      const santri = await this.absensiRepo.getUsersByKelas(kelasId);

      for (const user of santri) {
        await this.generateDailyAbsensiStatus(user.id, kelasId, date);
      }
    }
  }

  // Scheduler cron job tiap jam 00:00
  startCron() {
    cron.schedule("0 0 * * *", async () => {
      const kemarin = new Date();
      kemarin.setDate(kemarin.getDate() - 1);
      kemarin.setHours(0, 0, 0, 0);

      console.log(
        "Men-generate alpha absensi untuk tanggal:",
        kemarin.toLocaleDateString(),
      );
      await this.generateAlphaForAll(kemarin);
    });
  }


}
