import { Kelas } from "../../dist/generated";
import { KelasRepository } from "../repository/kelas.repository";

export class KelasService {
  constructor(private kelasRepository: KelasRepository) {}

  // GET ALL KELAS
  getAll = async (): Promise<Kelas[]> => {
    return this.kelasRepository.getAll();
  };

  // GET KELAS BY ID
  getById = async (id: number): Promise<Kelas | null> => {
    return this.kelasRepository.getById(id);
  };

  // CREATE NEW KELAS
  createKelas = async (data: {
    namaKelas: string;
    deskripsi?: string;
  }): Promise<Kelas> => {
    return this.kelasRepository.create(data);
  };

  // UPDATE KELAS
  updateKelas = async (id: number, data: Partial<Kelas>): Promise<Kelas> => {
    return this.kelasRepository.update(id, data);
  };

  // DELETE KELAS
  deleteKelas = async (id: number): Promise<Kelas> => {
    return this.kelasRepository.delete(id);
  };
}
