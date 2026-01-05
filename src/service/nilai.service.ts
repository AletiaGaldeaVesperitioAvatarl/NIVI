import { NilaiRepository } from "../repository/nilai.repository";
import { Nilai } from "../../dist/generated";

export class NilaiService {
  constructor(private nilaiRepository: NilaiRepository) {}

  // GET ALL NILAI
  getAll = async (): Promise<Nilai[]> => {
    return this.nilaiRepository.getAll();
  };

  // GET NILAI BY ID
  getById = async (id: number): Promise<Nilai | null> => {
    return this.nilaiRepository.getById(id);
  };

  // GET NILAI BY USER
  getByUserId = async (userId: number): Promise<Nilai[]> => {
    return this.nilaiRepository.getByUserId(userId);
  };

  // GET NILAI BY TUGAS
  getByTugasId = async (tugasId: number): Promise<Nilai[]> => {
    return this.nilaiRepository.getByTugasId(tugasId);
  };

  // CREATE NILAI
  createNilai = async (data: {
    userId: number;
    tugasId: number;
    nilai: number;
    catatan?: string;
  }): Promise<Nilai> => {
    return this.nilaiRepository.create(data);
  };

  // UPDATE NILAI
  updateNilai = async (id: number, data: Partial<Nilai>): Promise<Nilai> => {
    return this.nilaiRepository.update(id, data);
  };

  // DELETE NILAI
  deleteNilai = async (id: number): Promise<Nilai> => {
    return this.nilaiRepository.delete(id);
  };
}
