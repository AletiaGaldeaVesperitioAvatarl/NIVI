import { PrismaClient, JadwalAbsensi, Hari } from "../../dist/generated";

export class JadwalAbsensiRepository {
  constructor(private prisma: PrismaClient) {}

  findActiveSchedule = async (
    kelasId: number,
    now: Date,
    jadwalId?: number,
  ): Promise<JadwalAbsensi | null> => {
    if (jadwalId) {
      return this.prisma.jadwalAbsensi.findUnique({ where: { id: jadwalId } });
    }

    // Tentukan hari ini
    let hari: Hari;
    switch (now.getDay()) {
      case 0:
        hari = "minggu";
        break;
      case 1:
        hari = "senin";
        break;
      case 2:
        hari = "selasa";
        break;
      case 3:
        hari = "rabu";
        break;
      case 4:
        hari = "kamis";
        break;
      case 5:
        hari = "jumat";
        break;
      case 6:
        hari = "sabtu";
        break;
      default:
        hari = "senin";
    }

    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);

    // Format jam sekarang sebagai "HH:mm" string
    const pad = (n: number) => n.toString().padStart(2, "0");
    const nowTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

    return this.prisma.jadwalAbsensi.findFirst({
      where: {
        kelasId,
        OR: [
          // Jadwal khusus tanggal tertentu
          {
            tanggal: { gte: startOfDay, lte: endOfDay },
            jamMulai: { lte: nowTime },
            jamSelesai: { gte: nowTime },
          },
          // Jadwal rutin per hari
          {
            hari: hari,
            jamMulai: { lte: nowTime },
            jamSelesai: { gte: nowTime },
          },
        ],
      },
      orderBy: [{ tanggal: "asc" }, { jamMulai: "asc" }],
    });
  };

  // CREATE single
  create = async (data: {
    kelasId: number;
    hari: Hari;
    jamMulai: string;
    jamSelesai: string;
    tanggal: Date;
  }): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.create({ data });
  };

  // CREATE BULK 1 bulan atau rentang tanggal
  createBulk = async (
    kelasId: number,
    jamMulai: string,
    jamSelesai: string,
    tanggalMulai: Date,
    tanggalSelesai: Date,
  ) => {
    const jadwals: {
      kelasId: number;
      hari: Hari;
      jamMulai: string;
      jamSelesai: string;
      tanggal: Date;
    }[] = [];

    function getHariEnum(d: Date): Hari {
      switch (d.getDay()) {
        case 0:
          return "minggu";
        case 1:
          return "senin";
        case 2:
          return "selasa";
        case 3:
          return "rabu";
        case 4:
          return "kamis";
        case 5:
          return "jumat";
        case 6:
          return "sabtu";
        default:
          return "senin"; // fallback aman
      }
    }

    for (
      let d = new Date(tanggalMulai);
      d <= tanggalSelesai;
      d.setDate(d.getDate() + 1)
    ) {
      const hariEnum = getHariEnum(d);
      jadwals.push({
        kelasId,
        hari: hariEnum,
        jamMulai,
        jamSelesai,
        tanggal: new Date(d),
      });
    }

    return this.prisma.jadwalAbsensi.createMany({ data: jadwals });
  };

  getAllByKelas = async (kelasId: number): Promise<JadwalAbsensi[]> => {
    return this.prisma.jadwalAbsensi.findMany({
      where: { kelasId },
      include: { absensi: true, kelas: true },
    });
  };

  getAllByKelasInRange = async (
    kelasId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<JadwalAbsensi[]> => {
    return this.prisma.jadwalAbsensi.findMany({
      where: {
        kelasId,
        tanggal: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        kelas: true,
        absensi: true,
      },
      orderBy: [{ tanggal: "asc" }, { jamMulai: "asc" }],
    });
  };

  getById = async (id: number): Promise<JadwalAbsensi | null> => {
    return this.prisma.jadwalAbsensi.findUnique({
      where: { id },
      include: { absensi: true, kelas: true },
    });
  };

  update = async (
    id: number,
    data: Partial<JadwalAbsensi>,
  ): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.update({ where: { id }, data });
  };

  delete = async (id: number): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.delete({ where: { id } });
  };

findByTanggal(kelasId: number, tanggal: Date) {
  const start = new Date(tanggal);
  start.setHours(0,0,0,0);

  const end = new Date(tanggal);
  end.setHours(23,59,59,999);

  return this.prisma.jadwalAbsensi.findFirst({
    where: {
      kelasId,
      tanggal: { gte: start, lte: end },
    },
  });
}

  findByHari(kelasId: number, hari: Hari) {
    return this.prisma.jadwalAbsensi.findFirst({
      where: {
        kelasId,
        hari,
      },
    });
  }
  countByJadwalId = async (jadwalId: number): Promise<number> => {
    return this.prisma.absensi.count({
      where: {
        jadwalId: jadwalId,
      },
    });
  };
}