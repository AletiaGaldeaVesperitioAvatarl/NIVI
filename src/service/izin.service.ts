import { IzinRepository } from "../repository/izin.repository";
import { Izin, StatusIzin } from "../generated/client";

export class IzinService {
  constructor(private izinRepository: IzinRepository) {}

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
  updateIzin = async (id: number, data: Partial<Izin>): Promise<Izin> => {
    return this.izinRepository.update(id, data);
  };

  // DELETE IZIN
  deleteIzin = async (id: number): Promise<Izin> => {
    return this.izinRepository.delete(id);
  };
}
