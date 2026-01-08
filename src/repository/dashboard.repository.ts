import { PrismaClient, StatusIzin } from "../../dist/generated";

export class DashboardRepository {
    constructor(private prisma:PrismaClient){}
  async getTotalSantriByPengajar(pengajarId: number) {
    return this.prisma.user.count({
      where: {
        role: "santri",
        kelas: {
          users: {
            some: { id: pengajarId },
          },
        },
      },
    });
  }

  async getTotalKelasByPengajar(pengajarId: number) {
    return this.prisma.kelas.count({
      where: {
        users: {
          some: { id: pengajarId },
        },
      },
    });
  }

  async getAbsensiHariIni(kelasIds: number[], today: Date) {
    return this.prisma.absensi.groupBy({
      by: ["status"],
      where: {
        kelasId: { in: kelasIds },
        tanggal: today,
      },
      _count: true,
    });
  }

  async getTugasAktif(kelasIds: number[], today: Date) {
    return this.prisma.tugas.count({
      where: {
        kelasId: { in: kelasIds },
        deadline: { gte: today },
      },
    });
  }

  async getSubmissionMasuk(kelasIds: number[]) {
    return this.prisma.submission.count({
      where: {
        tugas: {
          kelasId: { in: kelasIds },
        },
      },
    });
  }

  async getIzinPending(kelasIds: number[]) {
    return this.prisma.izin.count({
      where: {
        kelasId: { in: kelasIds },
        status: StatusIzin.menunggu,
      },
    });
  }

  async getKelasIdsByPengajar(pengajarId: number) {
    const kelas = await this.prisma.kelas.findMany({
      where: {
        users: {
          some: { id: pengajarId },
        },
      },
      select: { id: true },
    });

    return kelas.map((k) => k.id);
  }
}
