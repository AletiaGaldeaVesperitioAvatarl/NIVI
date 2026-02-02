import { IzinRepository } from "../repository/izin.repository";
import { Izin, StatusIzin } from "../../dist/generated";
import { AbsensiService } from "./absensi.service";
import { AbsensiSettingService } from "./absensiSetting.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";

export class IzinService {
  constructor(
    private izinRepo: IzinRepository,
    private absensiRepo: AbsensiRepository,
    private absensiService: AbsensiService,
    private settingService: AbsensiSettingService,
    private jadwalAbsensiRepo: JadwalAbsensiRepository,
    
  ) {}

  // ===============================
  // GET
  // ===============================
  getAll = async () => {
    return this.izinRepo.getAll();
  }

  getAllByPengajar = async(pengajarId:number)=> {
    return this.izinRepo.getAllByPengajar(pengajarId)
  }
    getAllArchived = async (pengajarId:number) => {
    return this.izinRepo.getAllArchived(pengajarId);
  };

  // ===== SOFT DELETE =====
  softDelete = async (id: number) => {
    return this.izinRepo.softDelete(id);
  };

  getById(id: number) {
    return this.izinRepo.getById(id);
  }

  getByUserId(userId: number) {
    return this.izinRepo.getByUserId(userId);
  }

  // ===============================
  // CREATE IZIN (SANTRI)
  // ===============================
async createIzin(data: {
  userId: number;
  kelasId: number;
  tanggal: Date;
  alasan: string;
}): Promise<Izin> {

  // 🔹 NORMALISASI TANGGAL (00:00)
  const tanggalIzin = new Date(
    data.tanggal.getFullYear(),
    data.tanggal.getMonth(),
    data.tanggal.getDate(),
    12, 0, 0 // ⬅️ AMAN dari timezone bug
  );

  // 1️⃣ CEK JADWAL AKTIF SESUAI TANGGAL IZIN
  const jadwalAktif =
    await this.jadwalAbsensiRepo.findActiveSchedule(
      data.kelasId,
      tanggalIzin
    );

  if (!jadwalAktif) {
    throw new Error(
      "Izin hanya bisa diajukan saat jadwal absensi aktif"
    );
  }

  // 2️⃣ CEGAH IZIN DOBEL (STATUS MENUNGGU)
  const pending = await this.izinRepo.findByUserAndDate(
    data.userId,
    data.kelasId,
    tanggalIzin,
    "menunggu"
  );

  if (pending) {
    throw new Error("Masih ada izin menunggu di hari ini");
  }

  // 3️⃣ VALIDASI KUOTA ABSENSI HARIAN
  const setting = await this.settingService.getByKelas(data.kelasId);
  if (!setting?.maxAbsen) {
    throw new Error("Setting absensi kelas belum lengkap");
  }

  const jumlahAbsenHariIni =
    await this.absensiRepo.countAbsenHariIni(
      data.userId,
      data.kelasId,
      tanggalIzin
    );

  if (jumlahAbsenHariIni >= setting.maxAbsen) {
    throw new Error("Kuota absensi hari ini sudah penuh");
  }

  // 4️⃣ SIMPAN IZIN
  return this.izinRepo.create({
    userId: data.userId,
    kelasId: data.kelasId,
    tanggal: new Date(), // waktu real submit
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
  if (izin.status !== StatusIzin.menunggu)
    throw new Error("Izin sudah diproses");

  // JIKA PENGAJAR MENYETUJUI
  if (status === StatusIzin.disetujui) {

    const setting = await this.settingService.getByKelas(izin.kelasId);

    if (!setting?.maxAbsen) {
      await this.izinRepo.update(izinId, {
        status: StatusIzin.ditolak,
      });

      izin.status = StatusIzin.ditolak;
      return izin;
    }

    const totalHariIni = await this.absensiRepo.countTodayByUser(
      izin.userId
    );

    // 🚨 AUTO-TOLAK JIKA KUOTA HABIS
    if (totalHariIni >= setting.maxAbsen) {

      await this.izinRepo.update(izinId, {
        status: StatusIzin.ditolak,
      });

      izin.status = StatusIzin.ditolak;
      return izin;
    }

    // ✅ KUOTA MASIH ADA → CATAT ABSENSI IZIN
    await this.absensiService.absenIzinDariPersetujuan(
      izin.userId,
      izin.kelasId,
      izin.tanggal
    );

    await this.izinRepo.update(izinId, {
      status: StatusIzin.disetujui,
    });

    izin.status = StatusIzin.disetujui;
    return izin;
  }

  // JIKA PENGAJAR MENOLAK MANUAL
  await this.izinRepo.update(izinId, {
    status: StatusIzin.ditolak,
  });

  izin.status = StatusIzin.ditolak;
  return izin;
}




  // ===============================
  // DELETE IZIN
  // ===============================
  deleteIzin(id: number) {
    return this.izinRepo.delete(id);
  }
}
