import { TugasRepository } from "../repository/tugas.repository";

export class TugasService {
  constructor(private repo: TugasRepository) {}

  getAll = () => this.repo.getAll();

  getById = (id: number) => this.repo.getById(id);

  create = async (data: {
    kelasId: number;
    mataPelajaranId: number;
    title: string;
    description?: string;
    deadline: Date;
    createdBy: number;
  }) => {
    if (!data.kelasId) throw new Error("Kelas wajib diisi");
    if (!data.mataPelajaranId) throw new Error("Mata pelajaran wajib diisi");
    if (!data.title) throw new Error("Judul tugas wajib diisi");

    return this.repo.create(data);
  };

  update = (id: number, data: {
    title?: string;
    description?: string;
    deadline?: Date;
    mataPelajaranId?: number;
  }) => {
    return this.repo.update(id, data);
  };

  delete = (id: number) => this.repo.delete(id);

  getForSantri = (userId: number) => {
    return this.repo.getForSantri(userId);
  };
}
