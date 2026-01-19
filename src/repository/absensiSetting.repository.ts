import { PrismaClient, AbsensiSetting } from "../../dist/generated";

export class AbsensiSettingRepository {
  constructor(private prisma: PrismaClient) {}

  getByKelas(kelasId: number): Promise<AbsensiSetting | null> {
    return this.prisma.absensiSetting.findUnique({ where: { kelasId } });
  }

  create(kelasId: number, maxAbsen: number): Promise<AbsensiSetting> {
    return this.prisma.absensiSetting.create({
      data: { kelasId, maxAbsen },
    });
  }

  updateByKelas(kelasId: number, maxAbsen: number): Promise<AbsensiSetting> {
    return this.prisma.absensiSetting.update({
      where: { kelasId },
      data: { maxAbsen },
    });
  }

  updateById(id: number, maxAbsen: number): Promise<AbsensiSetting> {
    return this.prisma.absensiSetting.update({
      where: { id },
      data: { maxAbsen },
    });
  }

  getAll(): Promise<AbsensiSetting[]> {
    return this.prisma.absensiSetting.findMany({ include: { kelas: true } });
  }
}
