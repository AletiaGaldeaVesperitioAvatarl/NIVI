import { JadwalAbsensi } from "../../dist/generated";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";

export class JadwalAbsensiService {
  constructor(private repo: JadwalAbsensiRepository) {}

  createJadwal = async (data: {
    kelasId: number;
    hari: string;
    jamMulai: string;
    jamSelesai: string;
    tanggal?: Date;
  }): Promise<JadwalAbsensi> => {
    return this.repo.create({
      ...data,
      hari: data.hari as any // TypeScript sudah aman karena enum Hari
    });
  };

  createBulkJadwal = async (
    kelasId: number,
    jamMulai: string,
    jamSelesai: string,
    tanggalMulai: Date,
    tanggalSelesai: Date
  ) => {
    return this.repo.createBulk(kelasId, jamMulai, jamSelesai, tanggalMulai, tanggalSelesai);
  };

getAllByKelas = async (
  kelasId: number,
  month?: number,
  year?: number
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

  updateJadwal = async (id: number, data: Partial<JadwalAbsensi>): Promise<JadwalAbsensi> => {
    return this.repo.update(id, data);
  };

  deleteJadwal = async (id: number): Promise<JadwalAbsensi> => {
    return this.repo.delete(id);
  };
}
