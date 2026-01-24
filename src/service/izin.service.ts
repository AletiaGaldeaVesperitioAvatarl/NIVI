import { IzinRepository } from "../repository/izin.repository";
import { Izin} from "../../dist/generated";
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
  private jadwalAbsensiService: JadwalAbsensiService
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
    data.tanggal.getDate()
  );

  // 1️⃣ VALIDASI JADWAL ABSENSI
  const hasJadwal =
    await this.jadwalAbsensiService.hasScheduleOnDate(
      data.kelasId,
      tanggal
    );

  if (!hasJadwal) {
    throw new Error("Hari ini tidak ada jadwal absensi");
  }

  // 2️⃣ CEGAH IZIN DOBEL
  const pending = await this.izinRepo.findByUserAndDate(
    data.userId,
    data.kelasId,
    tanggal,
    "menunggu"
  );

  if (pending) {
    throw new Error("Masih ada izin menunggu di hari ini");
  }

  // 3️⃣ VALIDASI KUOTA ABSENSI KELAS
  const setting = await this.settingService.getByKelas(data.kelasId);
  if (!setting?.maxAbsen) {
    throw new Error("Setting absensi kelas belum lengkap");
  }

  const totalHariIni =
    await this.absensiRepo.countByKelasAndTanggal(
      data.kelasId,
      tanggal
    );

  if (totalHariIni >= setting.maxAbsen) {
    throw new Error("Absensi hari ini sudah penuh");
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
    status: "disetujui" | "ditolak"
  ): Promise<Izin> {
    const izin = await this.izinRepo.getById(izinId);
    if (!izin) throw new Error("Izin tidak ditemukan");

    if (izin.status !== "menunggu") {
      throw new Error("Izin sudah diproses");
    }

    if (status === "disetujui") {
      // Validasi kuota ulang (antisipasi race condition)
      const setting = await this.settingService.getByKelas(izin.kelasId);
      if (!setting?.maxAbsen) {
        throw new Error("Setting absensi belum lengkap");
      }

      const totalAbsensi = await this.absensiRepo.countByKelasAndTanggal(
        izin.kelasId,
        izin.tanggal
      );

      if (totalAbsensi >= setting.maxAbsen) {
        await this.izinRepo.update(izinId, { status: "ditolak" });
        throw new Error("Izin otomatis ditolak: kuota penuh");
      }

      // Catat sebagai absensi
      await this.absensiService.absenIzinDariPersetujuan(
        izin.userId,
        izin.kelasId,
        izin.tanggal
      );

      await this.izinRepo.update(izinId, { status: "disetujui" });
      izin.status = "disetujui";
    } else {
      await this.izinRepo.update(izinId, { status: "ditolak" });
      izin.status = "ditolak";
    }

    return izin;
  }
 
  deleteIzin(id: number) {
    return this.izinRepo.delete(id);
  }

}
