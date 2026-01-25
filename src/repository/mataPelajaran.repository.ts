import { PrismaClient, MataPelajaran } from "../../dist/generated";

export class MataPelajaranRepository {
  constructor(private prisma: PrismaClient) {}

  // CREATE
  create = async (data: {
    nama: string;
    kode: string;
  }): Promise<MataPelajaran> => {
    return this.prisma.mataPelajaran.create({ data });
  };

  // GET ALL
  getAll = async (): Promise<MataPelajaran[]> => {
    return this.prisma.mataPelajaran.findMany({
      orderBy: { createdAt: "desc" },
    });
  };

  // GET BY ID
  getById = async (id: number): Promise<MataPelajaran | null> => {
    return this.prisma.mataPelajaran.findUnique({
      where: { id },
      include: {
        tugas: true, // 🔥 lihat tugas dalam mapel
      },
    });
  };

  // UPDATE
  update = async (
    id: number,
    data: Partial<MataPelajaran>,
  ): Promise<MataPelajaran> => {
    return this.prisma.mataPelajaran.update({
      where: { id },
      data,
    });
  };

  // DELETE
  delete = async (id: number): Promise<MataPelajaran> => {
    return this.prisma.mataPelajaran.delete({
      where: { id },
    });
  };
}
