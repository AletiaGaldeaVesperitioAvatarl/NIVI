import { IzinRepository } from "../repository/izin.repository";
import { Izin, StatusIzin } from "../../dist/generated";
import { AbsensiRepository } from "../repository/absensi.repository";

export class IzinService {
  constructor(
    private izinRepository: IzinRepository,
    private absensiRepository: AbsensiRepository,
  ) {}

  // GET ALL IZIN
  getAll = async (): Promise<Izin[]> => {
    return this.izinRepository.getAll();
  };

  // GET IZIN BY ID
  getById = async (id: number): Promise<Izin | null> => {
    return this.izinRepository.getById(id);
  };

  // GET IZIN BY USER ID
  getByUserId = async (userId: number): Promise<Izin[]> => {
    return this.izinRepository.getByUserId(userId);
  };

  // CREATE IZIN
  createIzin = async (data: {
    userId: number;
    kelasId: number;
    tanggal: Date;
    alasan: string;
    status?: StatusIzin;
  }): Promise<Izin> => {
    return this.izinRepository.create(data);
  };

  // UPDATE IZIN
  updateIzin = async (id: number, data: Partial<Izin>) => {
    const izin = await this.izinRepository.getById(id);
    if (!izin) throw new Error("Izin tidak ditemukan");

    const updated = await this.izinRepository.update(id, data);

    if (data.status === "disetujui") {
      const exists = await this.absensiRepository.findByUserAndTanggal(
        izin.userId,
        izin.tanggal,
      );

      if (!exists) {
        await this.absensiRepository.createIzinAbsensi(
          izin.userId,
          izin.kelasId, // ✅ AMBIL DARI IZIN
          izin.tanggal,
        );
      }
    }

    return updated;
  };

  // DELETE IZIN
  deleteIzin = async (id: number): Promise<Izin> => {
    return this.izinRepository.delete(id);
  };
}
