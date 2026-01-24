import { AbsensiRepository } from "../repository/absensi.repository";
import { AbsensiSettingService } from "./absensiSetting.service";
import { JadwalAbsensi, StatusAbsensi } from "../../dist/generated";

export class AbsensiService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private settingService: AbsensiSettingService,
    private jadwalRepo: {
      findActiveSchedule: (
        kelasId: number,
        now: Date,
        jadwalId?: number
      ) => Promise<JadwalAbsensi | null>;
    }
  ) {}

  // ===============================
  // ABSEN HADIR / TELAT / DLL
  // ===============================
  async absenHadir(
    userId: number,
    kelasId: number,
    status: StatusAbsensi,
    jadwalId?: number
  ) {
    const now = new Date();

    // 1️⃣ Ambil setting kelas
    const setting = await this.settingService.getByKelas(kelasId);
    if (!setting) throw new Error("Admin belum mengatur absensi kelas");

    // 2️⃣ Ambil jadwal aktif
    const jadwal = await this.jadwalRepo.findActiveSchedule(
      kelasId,
      now,
      jadwalId
    );
    if (!jadwal) throw new Error("Tidak ada jadwal absensi aktif");

    // 3️⃣ Hitung absensi hari ini
    const todayCount = await this.absensiRepo.countTodayByUser(userId);
    if (todayCount >= setting.maxAbsen) {
      throw new Error(
        `Absensi hari ini sudah mencapai batas (${setting.maxAbsen}x)`
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
    tanggal: Date
  ) {
    const setting = await this.settingService.getByKelas(kelasId);
    if (!setting) throw new Error("Setting absensi belum ada");

    const todayCount = await this.absensiRepo.countTodayByUser(userId);
    if (todayCount >= setting.maxAbsen) {
      throw new Error(
        `Izin ditolak otomatis: batas absensi (${setting.maxAbsen}) tercapai`
      );
    }

    // Cegah double absensi
    const exists = await this.absensiRepo.findByUserAndTanggal(
      userId,
      tanggal
    );
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
    sort: 'asc' | 'desc';
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

}
