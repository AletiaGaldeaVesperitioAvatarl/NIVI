import { PrismaClient, Kelas } from "../generated/client";

export class KelasRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL KELAS
  getAll = async (): Promise<Kelas[]> => {
    return this.prisma.kelas.findMany({
      include: {
        users: true,
        absensi: true,
        izin: true,
        tugas: true,
      },
    });
  };

  // GET KELAS BY ID
  getById = async (id: number): Promise<Kelas | null> => {
    return this.prisma.kelas.findFirst({
      where: { id },
      include: {
        users: true,
        absensi: true,
        izin: true,
        tugas: true,
      },
    });
  };

  // CREATE NEW KELAS
  create = async (data: {
    namaKelas: string;
    deskripsi?: string;
  }): Promise<Kelas> => {
    return this.prisma.kelas.create({
      data,
    });
  };

  // UPDATE KELAS
  update = async (id: number, data: Partial<Kelas>): Promise<Kelas> => {
    return this.prisma.kelas.update({
      where: { id },
      data,
    });
  };

  // DELETE KELAS
  delete = async (id: number): Promise<Kelas> => {
    return this.prisma.kelas.delete({
      where: { id },
    });
  };
}
