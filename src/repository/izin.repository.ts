import { PrismaClient, Izin } from "../../dist/generated";

export class IzinRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL IZIN
  getAll = async (): Promise<Izin[]> => {
    return this.prisma.izin.findMany({
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // GET IZIN BY ID
  getById = async (id: number): Promise<Izin | null> => {
    return this.prisma.izin.findFirst({
      where: { id },
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // GET IZIN BY USER ID
  getByUserId = async (userId: number): Promise<Izin[]> => {
    return this.prisma.izin.findMany({
      where: { userId },
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // CREATE IZIN
  create = async (data: {
    userId: number;
    kelasId: number;
    tanggal: Date;
    alasan: string;
    status?: "menunggu" | "disetujui" | "ditolak";
  }): Promise<Izin> => {
    return this.prisma.izin.create({
      data: {
        ...data,
        status: data.status || "menunggu",
      },
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // UPDATE IZIN
  update = async (id: number, data: Partial<Izin>): Promise<Izin> => {
    return this.prisma.izin.update({
      where: { id },
      data,
      include: {
        user: true,
        kelas: true,
      },
    });
  };

  // DELETE IZIN
  delete = async (id: number): Promise<Izin> => {
    return this.prisma.izin.delete({
      where: { id },
    });
  };
}
