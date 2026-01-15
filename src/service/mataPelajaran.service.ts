import { MataPelajaranRepository } from "../repository/mataPelajaran.repository";

export class MataPelajaranService {
  constructor(private repo: MataPelajaranRepository) {}

  getAll = () => this.repo.getAll();

  getById = (id: number) => this.repo.getById(id);

  create = async (data: {
    nama: string;
    kode: string;
  }) => {
    if (!data.nama) {
      throw new Error("Nama mata pelajaran wajib diisi");
    }
    if (!data.kode) {
      throw new Error("Kode mata pelajaran wajib diisi");
    }

    return this.repo.create(data);
  };

  update = async (
    id: number,
    data: {
      nama?: string;
      kode?: string;
    }
  ) => {
    return this.repo.update(id, data);
  };

  delete = async (id: number) => {
    return this.repo.delete(id);
  };
}
