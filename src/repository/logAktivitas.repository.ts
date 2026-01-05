import { PrismaClient, LogAktivitas } from "../generated/client";

export class LogAktivitasRepository {
  constructor(private prisma: PrismaClient) {}

  // CREATE LOG
  async create(data: {
    userId: number;
    aktivitas: string;
  }): Promise<LogAktivitas> {
    return this.prisma.logAktivitas.create({
      data,
    });
  }

  // GET ALL LOG
  async findAll(): Promise<LogAktivitas[]> {
    return this.prisma.logAktivitas.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }

  // GET LOG BY USER
  async findByUserId(userId: number): Promise<LogAktivitas[]> {
    return this.prisma.logAktivitas.findMany({
      where: { userId },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // DELETE LOG (OPSIONAL, BUAT ADMIN)
  async delete(id: number): Promise<LogAktivitas> {
    return this.prisma.logAktivitas.delete({
      where: { id },
    });
  }
}
