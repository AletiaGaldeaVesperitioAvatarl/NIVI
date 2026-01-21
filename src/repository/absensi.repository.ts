import { PrismaClient, Absensi, StatusAbsensi } from "../../dist/generated";

export class AbsensiRepository {
  constructor(private prisma: PrismaClient) {}

  getAll(): Promise<Absensi[]> {
    return this.prisma.absensi.findMany({ include: { jadwal: true } });
  }

  getById(id: number): Promise<Absensi | null> {
    return this.prisma.absensi.findUnique({ where: { id }, include: { jadwal: true } });
  }

  getByUserId(userId: number): Promise<Absensi[]> {
    return this.prisma.absensi.findMany({ where: { userId }, include: { jadwal: true } });
  }

  getTodayByUser(userId: number): Promise<Absensi[]> {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.absensi.findMany({
      where: { userId, tanggal: { gte: start, lte: end } },
      include: { jadwal: true },
    });
  }

  countTodayByUser(userId: number): Promise<number> {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.absensi.count({
      where: { userId, tanggal: { gte: start, lte: end } },
    });
  }

  create(data: {
    userId: number;
    kelasId: number;
    jadwalId?: number;
    status: StatusAbsensi;
    tanggal: Date;
  }): Promise<Absensi> {
    return this.prisma.absensi.create({ data, include: { jadwal: true } });
  }

  update(id: number, data: Partial<Absensi>): Promise<Absensi> {
    return this.prisma.absensi.update({ where: { id }, data, include: { jadwal: true } });
  }

  delete(id: number): Promise<Absensi> {
    return this.prisma.absensi.delete({ where: { id }, include: { jadwal: true } });
  }

    findByUserAndTanggal(userId: number, tanggal: Date) {
    return this.prisma.absensi.findFirst({
      where: { userId, tanggal },
    });
  }

createIzinAbsensi(
  userId: number,
  kelasId: number,
  tanggal: Date
) {
  return this.prisma.absensi.create({
    data: {
      userId,
      kelasId, // ✅ INI YANG HILANG
      tanggal,
      status: "izin",
    },
  });
}

}
