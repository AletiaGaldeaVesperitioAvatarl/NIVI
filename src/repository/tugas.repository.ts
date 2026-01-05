import { PrismaClient, Tugas } from "../generated/client";

export class TugasRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL TUGAS
  getAll = async (): Promise<Tugas[]> => {
    return this.prisma.tugas.findMany({
      include: {
        kelas: true,      // relasi ke Kelas
        creator: true,    // relasi ke User yang buat tugas
        submission: true, // relasi ke submission
        nilai: true       // relasi ke nilai
      },
    });
  };

  // GET TUGAS BY ID
  getById = async (id: number): Promise<Tugas | null> => {
    return this.prisma.tugas.findFirst({
      where: { id },
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      },
    });
  };

  // CREATE NEW TUGAS
  create = async (data: {
    kelasId: number;
    title: string;
    description?: string;
    deadline: Date;
    createdBy: number;
  }): Promise<Tugas> => {
    return this.prisma.tugas.create({
      data,
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      }
    });
  };

  // UPDATE TUGAS
  update = async (id: number, data: Partial<Tugas>): Promise<Tugas> => {
    return this.prisma.tugas.update({
      where: { id },
      data,
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      }
    });
  };

  // DELETE TUGAS
  delete = async (id: number): Promise<Tugas> => {
    return this.prisma.tugas.delete({
      where: { id },
    });
  };
}
