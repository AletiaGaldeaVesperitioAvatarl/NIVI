import { Tugas } from "../../dist/generated";
import { TugasRepository } from "../repository/tugas.repository";

export class TugasService {
  constructor(private tugasRepository: TugasRepository) {}

  // GET ALL TUGAS
  getAll = async (): Promise<Tugas[]> => {
    return this.tugasRepository.getAll();
  };

  // GET TUGAS BY ID
  getById = async (id: number): Promise<Tugas | null> => {
    return this.tugasRepository.getById(id);
  };

  // CREATE NEW TUGAS
  createTugas = async (data: {
    kelasId: number;
    title: string;
    description?: string;
    deadline: Date;
    createdBy: number;
  }): Promise<Tugas> => {
    return this.tugasRepository.create(data);
  };

  // UPDATE TUGAS
  updateTugas = async (id: number, data: Partial<Tugas>): Promise<Tugas> => {
    return this.tugasRepository.update(id, data);
  };

  // DELETE TUGAS
  deleteTugas = async (id: number): Promise<Tugas> => {
    return this.tugasRepository.delete(id);
  };
async getTasksForSantri(userId: number) {
  return this.tugasRepository.getTasksWithSubmission(userId);
}



}
