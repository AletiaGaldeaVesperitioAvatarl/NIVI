import { PrismaClient, Kelas } from "../../dist/generated";

export class KelasRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL KELAS
getAll = async (): Promise<Kelas[]> => {
  return this.prisma.kelas.findMany({
    include: {
      santri: {
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
assignPengajar = async (kelasId: number, pengajarId: number) => {
  return this.prisma.kelas.update({
    where: { id: kelasId },
    data: {
      pengajar: {
        connect: { id: pengajarId },
      },
    },
    include: {
      pengajar: true,
      santri: true,
    },
  });
};

  setPengajar = async (kelasId: number, pengajarIds: number[]) => {
  return this.prisma.kelas.update({
    where: { id: kelasId },
    data: {
      pengajar: {
        set: pengajarIds.map(id => ({ id })),
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

}
