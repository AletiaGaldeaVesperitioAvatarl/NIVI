import { IzinRepository } from "../repository/izin.repository";
import { Izin, StatusIzin } from "../../dist/generated";
import { AbsensiService } from "./absensi.service";
import { AbsensiSettingService } from "./absensiSetting.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import { JadwalAbsensiService } from "./jadwalAbsensi.service";

export class IzinService {
  constructor(
    private izinRepo: IzinRepository,
    private absensiRepo: AbsensiRepository,
    private absensiService: AbsensiService,
    private settingService: AbsensiSettingService,
    private jadwalAbsensiService: JadwalAbsensiService,
  ) {}

  // ===============================
  // GET
  // ===============================
  getAll() {
    return this.izinRepo.getAll();
  }

  getById(id: number) {
    return this.izinRepo.getById(id);
  }

  getByUserId(userId: number) {
    return this.izinRepo.getByUserId(userId);
  }

  // ===============================
  // CREATE IZIN (SANTRI)
  // ===============================
  // IzinService.ts
  async createIzin(data: {
    userId: number;
    kelasId: number;
    tanggal: Date;
    alasan: string;
  }): Promise<Izin> {
    const tanggal = new Date(
      data.tanggal.getFullYear(),
      data.tanggal.getMonth(),
      data.tanggal.getDate(),
    );

    // 1️⃣ VALIDASI JADWAL ABSENSI
    const hasJadwal = await this.jadwalAbsensiService.hasScheduleOnDate(
      data.kelasId,
      tanggal,
    );

    if (!hasJadwal) {
      throw new Error("Hari ini tidak ada jadwal absensi");
    }

    // 2️⃣ CEGAH IZIN DOBEL
    const pending = await this.izinRepo.findByUserAndDate(
      data.userId,
      data.kelasId,
      tanggal,
      "menunggu",
    );

    if (pending) {
      throw new Error("Masih ada izin menunggu di hari ini");
    }

    // 3️⃣ VALIDASI KUOTA ABSENSI KELAS
   // Ambil setting absensi
const setting = await this.settingService.getByKelas(data.kelasId);
if (!setting?.maxAbsen) {
    throw new Error("Setting absensi kelas belum lengkap");
}

// Hitung absensi santri hari ini
const userAbsensiHariIni = await this.absensiRepo.countTodayByUser(data.userId);

if (userAbsensiHariIni >= setting.maxAbsen) {
    throw new Error("Kuota absensi Anda hari ini sudah penuh");
}


    // 4️⃣ SIMPAN IZIN
    return this.izinRepo.create({
      userId: data.userId,
      kelasId: data.kelasId,
      tanggal,
      alasan: data.alasan,
      status: "menunggu",
    });
  }

  // ===============================
  // UPDATE IZIN (PENGAJAR)
  // ===============================
  // IzinService.ts
  async updateIzinStatus(
    izinId: number,
    status: StatusIzin
  ): Promise<Izin> {
    const izin = await this.izinRepo.getById(izinId);
    if (!izin) throw new Error("Izin tidak ditemukan");

    if (izin.status !== StatusIzin.menunggu) {
      throw new Error("Izin sudah diproses");
    }

  if (status === StatusIzin.disetujui) {
    // Validasi kuota user
    const setting = await this.settingService.getByKelas(izin.kelasId);
    if (!setting?.maxAbsen) throw new Error("Setting absensi belum lengkap");

    const userAbsensiHariIni = await this.absensiRepo.countTodayByUser(izin.userId);

    if (userAbsensiHariIni >= setting.maxAbsen) {
        await this.izinRepo.update(izinId, { status: StatusIzin.ditolak });
        throw new Error("Izin otomatis ditolak: kuota absensi Anda sudah penuh");
    }

    // Catat sebagai absensi
    await this.absensiService.absenIzinDariPersetujuan(
        izin.userId,
        izin.kelasId,
        izin.tanggal,
    );

    await this.izinRepo.update(izinId, { status: StatusIzin.disetujui });
    izin.status = "disetujui";
}
else {
      await this.izinRepo.update(izinId, { status: StatusIzin.ditolak });
      izin.status = "ditolak";
    }

    return izin;
  }

  deleteIzin(id: number) {
    return this.izinRepo.delete(id);
  }
}
