import { IzinRepository } from "../repository/izin.repository";
import { Izin, StatusIzin } from "../../dist/generated";
import { AbsensiService } from "./absensi.service";
import { AbsensiSettingService } from "./absensiSetting.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import { JadwalAbsensiService } from "./jadwalAbsensi.service";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";

export class IzinService {
  constructor(
    private izinRepo: IzinRepository,
    private absensiRepo: AbsensiRepository,
    private absensiService: AbsensiService,
    private settingService: AbsensiSettingService,
    private jadwalAbsensiRepo: JadwalAbsensiRepository,
    private jadwalAbsensiService: JadwalAbsensiService,
    
  ) {}

  // ===============================
  // GET
  // ===============================
  getAll() {
    return this.izinRepo.getAll();
  }

  getAllByPengajar (pengajarId:number) {
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
  const tanggal = new Date(
    data.tanggal.getFullYear(),
    data.tanggal.getMonth(),
    data.tanggal.getDate()
  );

  // 1️⃣ CEK JADWAL AKTIF (TANGGAL + JAM)
  const now = new Date();
  const jadwalAktif = await this.jadwalAbsensiRepo.findActiveSchedule(
    data.kelasId,
    now
  );

  if (!jadwalAktif) {
    throw new Error(
      "Izin hanya bisa diajukan saat jam absensi aktif sesuai jadwal"
    );
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

  // 3️⃣ VALIDASI KUOTA ABSENSI SANTRI
  const setting = await this.settingService.getByKelas(data.kelasId);
  if (!setting?.maxAbsen) {
    throw new Error("Setting absensi kelas belum lengkap");
  }

  const userAbsensiHariIni = await this.absensiRepo.countTodayByUser(
    data.userId
  );

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
async updateIzinStatus(izinId: number, status: StatusIzin): Promise<Izin> {
  const izin = await this.izinRepo.getById(izinId);
  if (!izin) throw new Error("Izin tidak ditemukan");
  if (izin.status !== StatusIzin.menunggu) throw new Error("Izin sudah diproses");

  if (status === StatusIzin.disetujui) {
    // Catat sebagai absensi izin
    await this.absensiService.absenIzinDariPersetujuan(
      izin.userId,
      izin.kelasId,
      izin.tanggal
    );

    // Update status izin jadi disetujui
    await this.izinRepo.update(izinId, { status: StatusIzin.disetujui });
    izin.status = StatusIzin.disetujui;

  } else {
    await this.izinRepo.update(izinId, { status: StatusIzin.ditolak });
    izin.status = StatusIzin.ditolak;
  }

  return izin;
}


  // ===============================
  // DELETE IZIN
  // ===============================
  deleteIzin(id: number) {
    return this.izinRepo.delete(id);
  }
}
