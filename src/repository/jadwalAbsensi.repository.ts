import { PrismaClient, JadwalAbsensi, Hari } from "../../dist/generated";

export class JadwalAbsensiRepository {
  constructor(private prisma: PrismaClient) {}

  // CREATE single
  create = async (data: {
    kelasId: number;
    hari: Hari;
    jamMulai: string;
    jamSelesai: string;
    tanggal?: Date;
  }): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.create({ data });
  };

  // CREATE BULK 1 bulan atau rentang tanggal
  createBulk = async (
    kelasId: number,
    jamMulai: string,
    jamSelesai: string,
    tanggalMulai: Date,
    tanggalSelesai: Date
  ) => {
    const jadwals: { kelasId: number; hari: Hari; jamMulai: string; jamSelesai: string; tanggal: Date }[] = [];

    function getHariEnum(d: Date): Hari {
      switch(d.getDay()) {
        case 0: return "minggu";
        case 1: return "senin";
        case 2: return "selasa";
        case 3: return "rabu";
        case 4: return "kamis";
        case 5: return "jumat";
        case 6: return "sabtu";
        default: return "senin"; // fallback aman
      }
    }

    for (let d = new Date(tanggalMulai); d <= tanggalSelesai; d.setDate(d.getDate() + 1)) {
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
      include: { absensi: true, kelas: true }
    });
  };

  getAllByKelasInRange = async (kelasId: number, startDate: Date, endDate: Date): Promise<JadwalAbsensi[]> => {
  return this.prisma.jadwalAbsensi.findMany({
    where: {
      kelasId,
      tanggal: {
        gte: startDate,
        lte: endDate
      }
    },
    include: {
      kelas: true,
      absensi: true
    },
    orderBy: [
      { tanggal: 'asc' },
      { jamMulai: 'asc' }
    ]
  });
};


  getById = async (id: number): Promise<JadwalAbsensi | null> => {
    return this.prisma.jadwalAbsensi.findUnique({ 
      where: { id },
      include: { absensi: true, kelas: true }
    });
  };

  update = async (id: number, data: Partial<JadwalAbsensi>): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.update({ where: { id }, data });
  };

  delete = async (id: number): Promise<JadwalAbsensi> => {
    return this.prisma.jadwalAbsensi.delete({ where: { id } });
  };
}
