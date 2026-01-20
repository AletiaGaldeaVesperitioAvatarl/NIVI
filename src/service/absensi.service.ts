import { AbsensiRepository } from "../repository/absensi.repository";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository";
import { JadwalAbsensi, StatusAbsensi } from "../../dist/generated";

export class AbsensiService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private settingRepo: AbsensiSettingRepository,
    private jadwalRepo: { findActiveSchedule: (kelasId: number, now: Date, jadwalId?: number) => Promise<JadwalAbsensi | null> }
  ) {}

  async absenHadir(
    userId: number,
    kelasId: number,
    status: StatusAbsensi,
    jadwalId?: number
  ) {
    const now = new Date();

    // 1️⃣ Ambil setting maxAbsen
    const setting = await this.settingRepo.getByKelas(kelasId);
    if (!setting) throw new Error("Admin belum set absensi untuk kelas ini");
    const maxAbsen = setting.maxAbsen;

    // 2️⃣ Ambil jadwal aktif
    let jadwal: JadwalAbsensi | null = null;
    if (jadwalId) {
      // jika jadwalId diberikan, ambil jadwal itu
      jadwal = await this.jadwalRepo.findActiveSchedule(kelasId, now, jadwalId);
    } else {
      // ambil jadwal aktif hari ini (override tanggal khusus atau hari reguler)
      jadwal = await this.jadwalRepo.findActiveSchedule(kelasId, now);
    }

    if (!jadwal) throw new Error("Tidak ada jadwal absensi aktif saat ini");

    // 3️⃣ Hitung absensi hari ini
    const todayCount = await this.absensiRepo.countTodayByUser(userId);
    if (todayCount >= maxAbsen)
      throw new Error(`Absensi hari ini sudah mencapai batas (${maxAbsen}x)`);

    // 4️⃣ Simpan absensi (tanggal wajib ada)
    return this.absensiRepo.create({
      userId,
      kelasId,
      jadwalId: jadwal.id,
      status,
      tanggal: now, // selalu ada
    });
  }

  getTodayByUser(userId: number) {
    return this.absensiRepo.getTodayByUser(userId);
  }

  getByUserId(userId: number) {
    return this.absensiRepo.getByUserId(userId);
  }

  getAll() {
    return this.absensiRepo.getAll();
  }

  updateAbsensi(id: number, data: Partial<{ status: StatusAbsensi }>) {
    return this.absensiRepo.update(id, data);
  }

  deleteAbsensi(id: number) {
    return this.absensiRepo.delete(id);
  }
}
