import { Absensi } from "../generated/client";
import { AbsensiRepository } from "../repository/absensi.repository";

export class AbsensiService {
  constructor(private absensiRepository: AbsensiRepository) {}

  // GET ALL ABSENSI
  getAll = async (): Promise<Absensi[]> => {
    return this.absensiRepository.getAll();
  };

  // GET ABSENSI BY ID
  getById = async (id: number): Promise<Absensi | null> => {
    return this.absensiRepository.getById(id);
  };

  // GET ABSENSI BY USER ID
  getByUserId = async (userId: number): Promise<Absensi[]> => {
    return this.absensiRepository.getByUserId(userId);
  };

  // CREATE ABSENSI
  createAbsensi = async (data: {
    userId: number;
    kelasId: number;
    tanggal: Date;
    status: "hadir" | "izin" | "alpha";
  }): Promise<Absensi> => {
    return this.absensiRepository.create(data);
  };

  // UPDATE ABSENSI
  updateAbsensi = async (id: number, data: Partial<Absensi>): Promise<Absensi> => {
    return this.absensiRepository.update(id, data);
  };

  // DELETE ABSENSI
  deleteAbsensi = async (id: number): Promise<Absensi> => {
    return this.absensiRepository.delete(id);
  };
}
