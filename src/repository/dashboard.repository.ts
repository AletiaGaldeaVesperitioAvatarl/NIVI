import { PrismaClient, StatusIzin } from "../../dist/generated";

export class DashboardRepository {
    constructor(private prisma:PrismaClient){}
async getTotalSantriByPengajar(kelasIds: number[]) {
  return this.prisma.user.count({
    where: {
      role: "santri",
      kelasId: { in: kelasIds },
    },
  });
}



async getTotalKelasByPengajar(pengajarId: number) {
  return this.prisma.kelas.count({
    where: {
      pengajar: {
        some: { id: pengajarId },
      },
    },
  });
}


async getAbsensiHariIni(kelasIds: number[], date: Date) {
  if (kelasIds.length === 0) return [];

  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  return this.prisma.absensi.groupBy({
    by: ["status"],
    where: {
      kelasId: { in: kelasIds },
      tanggal: {
        gte: start,
        lte: end,
      },
    },
    _count: {
      _all: true,
    },
  });
}


  async getTugasAktifSantri(kelasIds: number[], today: Date) {
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
      pengajar: {
        some: { id: pengajarId },
      },
    },
    select: { id: true },
  });

  return kelas.map(k => k.id);
}
// ===============================================
  getKelasByUser(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        kelas: true,
      },
    });
  }

  getAbsensiHariSantri(userId: number, today: Date) {
    return this.prisma.absensi.findFirst({
      where: {
        userId,
        tanggal: {
          gte: new Date(today.setHours(0, 0, 0)),
          lte: new Date(today.setHours(23, 59, 59)),
        },
      },
    });
  }

  getPersentaseKehadiran(userId: number) {
    return this.prisma.absensi.groupBy({
      by: ["status"],
      where: { userId },
      _count: true,
    });
  }

  getTugasAktif(kelasId: number) {
    return this.prisma.tugas.findMany({
      where: {
        kelasId,
        deadline: { gte: new Date() },
      },
      orderBy: { deadline: "asc" },
    });
  }

  getRiwayatAbsensi(userId: number) {
    return this.prisma.absensi.findMany({
      where: { userId },
      orderBy: { tanggal: "desc" },
      take: 7,
    });
  }
}


