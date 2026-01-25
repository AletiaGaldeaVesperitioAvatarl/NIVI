import { Hari, JadwalAbsensi } from "../../dist/generated";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";

export class JadwalAbsensiService {
  constructor(private repo: JadwalAbsensiRepository) {}

  createJadwal = async (data: {
    kelasId: number;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    tanggal: Date;
  }) => {
    const exists = await this.repo.findByTanggal(data.kelasId, data.tanggal);

    if (exists) {
      throw new Error("Sudah ada jadwal absensi di tanggal ini");
    }

    return this.repo.create({
      ...data,
      hari: this.mapDayToEnum(data.tanggal),
    });
  };

  createBulkJadwal = async (
    kelasId: number,
    jamMulai: string,
    jamSelesai: string,
    tanggalMulai: Date,
    tanggalSelesai: Date,
  ) => {
    for (
      let d = new Date(tanggalMulai);
      d <= tanggalSelesai;
      d.setDate(d.getDate() + 1)
    ) {
      const exists = await this.repo.findByTanggal(kelasId, d);
      if (exists) {
        throw new Error(
          `Jadwal tanggal ${d.toISOString().split("T")[0]} sudah ada`,
        );
      }
    }

    return this.repo.createBulk(
      kelasId,
      jamMulai,
      jamSelesai,
      tanggalMulai,
      tanggalSelesai,
    );
  };

  getAllByKelas = async (
    kelasId: number,
    month?: number,
    year?: number,
  ): Promise<JadwalAbsensi[]> => {
    if (month && year) {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0); // last day of month
      return this.repo.getAllByKelasInRange(kelasId, startDate, endDate);
    }
    return this.repo.getAllByKelas(kelasId);
  };

  getById = async (id: number): Promise<JadwalAbsensi | null> => {
    return this.repo.getById(id);
  };

  async updateJadwal(
    id: number,
    data: Partial<JadwalAbsensi>,
  ): Promise<JadwalAbsensi> {
    const jadwal = await this.repo.getById(id);
    if (!jadwal) throw new Error("Jadwal tidak ditemukan");

    const totalAbsensi = await this.repo.countByJadwalId(id);

    // ❌ Jika sudah ada absensi
    if (totalAbsensi > 0) {
      // ❌ Larang ubah field berbahaya
      if (data.tanggal || data.kelasId || data.hari) {
        throw new Error(
          "Jadwal sudah digunakan absensi, hanya jam yang boleh diubah",
        );
      }
    } else {
      // ✅ Belum ada absensi → cek konflik tanggal
      if (data.tanggal) {
        const exists = await this.repo.findByTanggal(
          jadwal.kelasId,
          data.tanggal,
        );

        if (exists && exists.id !== id) {
          throw new Error("Tanggal tersebut sudah memiliki jadwal");
        }

        // hari DIHITUNG ULANG
        data.hari = this.mapDayToEnum(data.tanggal);
      }
    }

    return this.repo.update(id, data);
  }

  async deleteJadwal(id: number) {
    const totalAbsensi = await this.repo.countByJadwalId(id);

    if (totalAbsensi > 0) {
      throw new Error(
        "Jadwal tidak dapat dihapus karena sudah digunakan untuk absensi",
      );
    }

    return this.repo.delete(id);
  }

  async hasScheduleOnDate(kelasId: number, date: Date): Promise<boolean> {
    const normalizedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
    );

    // 1️⃣ PRIORITAS: override tanggal
    const jadwalTanggal = await this.repo.findByTanggal(
      kelasId,
      normalizedDate,
    );

    if (jadwalTanggal) return true;

    // 2️⃣ fallback: jadwal mingguan
    const hariEnum = this.mapDayToEnum(normalizedDate);

    const jadwalHari = await this.repo.findByHari(kelasId, hariEnum);

    return !!jadwalHari;
  }

  private mapDayToEnum(date: Date): Hari {
    const map: Hari[] = [
      Hari.minggu,
      Hari.senin,
      Hari.selasa,
      Hari.rabu,
      Hari.kamis,
      Hari.jumat,
      Hari.sabtu,
    ];

    const dayIndex = date.getDay();

    const hari = map[dayIndex];
    if (!hari) {
      throw new Error("Hari tidak valid");
    }

    return hari;
  }
}
