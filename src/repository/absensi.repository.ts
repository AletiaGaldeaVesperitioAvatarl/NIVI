import { PrismaClient, Absensi, StatusAbsensi } from "../../dist/generated";

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

create = async (data: {
  userId: number;
  kelasId: number;
  status: StatusAbsensi;
}): Promise<Absensi> => {
  return this.prisma.absensi.create({
    data: {
      userId: data.userId,
      kelasId: data.kelasId,
      status: data.status,
      tanggal: new Date(),
    },
  });
};

  getTodayByUser = async (userId: number): Promise<Absensi[]> => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    return this.prisma.absensi.findMany({
      where: {
        userId,
        tanggal: {
          gte: start,
          lte: end,
        },
      },
      orderBy: { tanggal: "asc" },
    });
  };
    
  // AUTO ALPHA SUPPORT
  
  // ambil semua santri aktif
  getAllSantriAktif = async (): Promise<
    { id: number; kelasId: number | null }[]
  > => {
    return this.prisma.user.findMany({
      where: {
        role: "santri",
        isActive: true,
      },
      select: {
        id: true,
        kelasId: true,
      },
    });
  };

  // ambil absensi hari ini by user
hasIzinToday = async (userId: number): Promise<boolean> => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const izin = await this.prisma.izin.findFirst({
    where: {
      userId,
      status: "disetujui",
      tanggal: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  return !!izin;
};


  // AMBIL JUMLAH SANTRI PER KELAS
countSantriByKelas = async (kelasId: number): Promise<number> => {
  return this.prisma.user.count({
    where: {
      role: "santri",
      kelasId,
      isActive: true,
    },
  });
};

// AMBIL ABSENSI PER KELAS & BULAN
getAbsensiByKelasAndMonth = async (
  kelasId: number,
  start: Date,
  end: Date
) => {
  return this.prisma.absensi.findMany({
    where: {
      kelasId,
      tanggal: {
        gte: start,
        lte: end,
      },
    },
  });
};

getByKelasAndTanggal = async (
  kelasId: number,
  tanggal: Date
) => {
  const start = new Date(tanggal);
  start.setHours(0, 0, 0, 0);

  const end = new Date(tanggal);
  end.setHours(23, 59, 59, 999);

  return this.prisma.absensi.findMany({
    where: {
      kelasId,
      tanggal: { gte: start, lte: end },
    },
    include: {
      user: true,
    },
  });
};

createManyPerHari = async (
  kelasId: number,
  tanggal: Date,
  data: { userId: number; status: StatusAbsensi }[]
) => {
  return this.prisma.absensi.createMany({
    data: data.map((d) => ({
      userId: d.userId,
      kelasId,
      status: d.status,
      tanggal,
    })),
  });
};


deleteByKelasAndTanggal = async (
  kelasId: number,
  tanggal: Date
) => {
  const start = new Date(tanggal);
  start.setHours(0, 0, 0, 0);

  const end = new Date(tanggal);
  end.setHours(23, 59, 59, 999);

  return this.prisma.absensi.deleteMany({
    where: {
      kelasId,
      tanggal: { gte: start, lte: end },
    },
  });
};

getSantriByKelas = async (kelasId: number) => {
  return this.prisma.user.findMany({
    where: {
      kelasId,
      role: "santri",
      isActive: true,
    },
    select: { id: true },
  });
};

exists = async (
  userId: number,
  kelasId: number,
  tanggal: Date
) => {
  const start = new Date(tanggal);
  start.setHours(0, 0, 0, 0);

  const end = new Date(tanggal);
  end.setHours(23, 59, 59, 999);

  const count = await this.prisma.absensi.count({
    where: {
      userId,
      kelasId,
      tanggal: { gte: start, lte: end },
    },
  });

  return count > 0;
};

createManual = async (data: {
  userId: number;
  kelasId: number;
  status: StatusAbsensi;
  tanggal: Date;
}) => {
  return this.prisma.absensi.create({ data });
};

}
