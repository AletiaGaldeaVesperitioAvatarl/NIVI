import { PrismaClient, Absensi } from "../../dist/generated";

export class AbsensiRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL ABSENSI
  getAll = async (): Promise<Absensi[]> => {
    return this.prisma.absensi.findMany({
      include: {
        user: true,   // relasi ke User
        kelas: true,  // relasi ke Kelas
      },
    });
  };

  // GET ABSENSI BY ID
  getById = async (id: number): Promise<Absensi | null> => {
    return this.prisma.absensi.findFirst({
      where: { id },
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // GET ABSENSI BY USER ID
  getByUserId = async (userId: number): Promise<Absensi[]> => {
    return this.prisma.absensi.findMany({
      where: { userId },
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // CREATE ABSENSI
  create = async (data: {
    userId: number;
    kelasId: number;
    tanggal: Date;
    status: "hadir" | "izin" | "alpha";
  }): Promise<Absensi> => {
    return this.prisma.absensi.create({
      data,
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // UPDATE ABSENSI
  update = async (id: number, data: Partial<Absensi>): Promise<Absensi> => {
    return this.prisma.absensi.update({
      where: { id },
      data,
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // DELETE ABSENSI
  delete = async (id: number): Promise<Absensi> => {
    return this.prisma.absensi.delete({
      where: { id },
    });
  };
}
