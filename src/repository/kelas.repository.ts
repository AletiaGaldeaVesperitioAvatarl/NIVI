import { PrismaClient, Kelas } from "../../dist/generated";

export class KelasRepository {
  constructor(private prisma: PrismaClient) {}


  getAllKelas() {
  return this.prisma.kelas.findMany({
    include: {
      tugas: {
        include: {
          mataPelajaran: true,
        },
      },
      santri: {
        where: { isActive: true },
        select: { id: true },
      },
    },
  });
}


  // GET ALL KELAS
  getAll = async (): Promise<Kelas[]> => {
    return this.prisma.kelas.findMany({
      include: {
        santri: {
          where:{
            isActive:true
          },
          include: {
            profile: {
              select: {
                fotoUrl: true,
              },
            },
          },
        },
        pengajar: true,
        absensi: true,
        izin: true,
        tugas: true,
      },
    });
  };

    getAllSantri = async (): Promise<Kelas[]> => {
     return this.prisma.kelas.findMany({
      include: {
        santri: {
          where:{
            isActive:true
          },
          include: {
            profile: {
              select: {
                fotoUrl: true,
              },
            },
          },
        },
        pengajar: true,
        absensi: true,
        izin: true,
        tugas: true,
      },
    });

  };

  // GET KELAS BY ID
  getById = async (id: number): Promise<Kelas | null> => {
    return this.prisma.kelas.findFirst({
      where: { id },
      include: {
        pengajar: {
          select: {
            id: true,
            email: true,
            profile: true,
          },
        },
        santri: {
          select: {
            id: true,
            email: true,
            profile: true,
          },
        },
        absensi: true,
        izin: true,
        tugas: true,
      },
    });
  };

  // CREATE NEW KELAS
  create = async (data: {
    namaKelas: string;
    deskripsi?: string;
  }): Promise<Kelas> => {
    return this.prisma.kelas.create({
      data,
    });
  };

  // UPDATE KELAS
  update = async (id: number, data: Partial<Kelas>): Promise<Kelas> => {
    return this.prisma.kelas.update({
      where: { id },
      data,
    });
  };

  // DELETE KELAS
  delete = async (id: number): Promise<Kelas> => {
    return this.prisma.kelas.delete({
      where: { id },
    });
  };
  // repository/kelas.repository.ts
  assignPengajar(kelasId: number, pengajarIds: number | number[]) {
    const ids = Array.isArray(pengajarIds) ? pengajarIds : [pengajarIds];

    // filter invalid values
    const validIds = ids.filter((id) => typeof id === "number");

    if (validIds.length === 0)
      throw new Error("Tidak ada pengajar valid untuk ditambahkan");

    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: { connect: validIds.map((id) => ({ id })) },
      },
      include: { pengajar: true },
    });
  }

  setPengajar = async (kelasId: number, pengajarIds: number[]) => {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: {
          set: pengajarIds.map((id) => ({ id })),
        },
      },
      include: {
        pengajar: true,
        santri: true,
      },
    });
  };

  addPengajar = async (kelasId: number, pengajarId: number) => {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: {
          connect: { id: pengajarId },
        },
      },
    });
  };

  getKelasByPengajar = (pengajarId: number) => {
  return this.prisma.kelas.findMany({
    where: { id:pengajarId }, // pastikan di DB ada kolom pengajarId atau relasi
    orderBy: { namaKelas: "asc" },
  });
};

  async findByPengajar(pengajarId: number) {
    return this.prisma.kelas.findMany({
      where: {
        pengajar: {
          some: { id: pengajarId },
        },
      },
      include: {
        santri:{
          where:{
            isActive:true
          }
        },
        pengajar: true,
        absensiSetting: true,
        absensi: true,
        jadwal: true,
        izin: true,
        tugas: true,
      },
    });
  }
}
