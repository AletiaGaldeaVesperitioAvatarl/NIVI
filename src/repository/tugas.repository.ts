import { PrismaClient} from "../../dist/generated";

export class TugasRepository {
  constructor(private prisma: PrismaClient) {}

  // 🔹 GET ALL (ADMIN)
  getAll = async () => {
    return this.prisma.tugas.findMany({
      include: {
        kelas: true,
        mataPelajaran: true,
        creator: true,
      },
      orderBy: { createdAt: "desc" },
    });
  };

  // 🔹 GET BY ID
  getById = async (id: number) => {
    return this.prisma.tugas.findUnique({
      where: { id },
      include: {
        kelas: true,
        mataPelajaran: true,
        creator: true,
        submission: true,
        nilai: true,
      },
    });
  };

  // 🔹 CREATE
create = async (data: {
  kelasId: number;
  mataPelajaranId: number;
  title: string;
  description?: string;
  deadline: Date;
  createdBy: number;
}) => {
  return this.prisma.tugas.create({
    data: {
      title: data.title,
      description: data.description ?? null, // 🔥 FIX UTAMA
      deadline: data.deadline,

      kelas: { connect: { id: data.kelasId } },
      mataPelajaran: { connect: { id: data.mataPelajaranId } },
      creator: { connect: { id: data.createdBy } },
    },
  });
};

  // 🔹 UPDATE
update = async (
  id: number,
  data: {
    title?: string;
    description?: string;
    deadline?: Date;
    mataPelajaranId?: number;
  }
) => {
  return this.prisma.tugas.update({
    where: { id },
    data: {
      ...(data.title !== undefined && { title: data.title }),
      ...(data.description !== undefined && {
        description: data.description ?? null,
      }),
      ...(data.deadline !== undefined && { deadline: data.deadline }),
      ...(data.mataPelajaranId !== undefined && {
        mataPelajaran: {
          connect: { id: data.mataPelajaranId },
        },
      }),
    },
  });
};

  // 🔹 DELETE
  delete = async (id: number) => {
    return this.prisma.tugas.delete({ where: { id } });
  };

  // 🔹 GET UNTUK SANTRI
  getForSantri = async (userId: number) => {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { kelasId: true },
    });

    if (!user?.kelasId) return [];

    const tugas = await this.prisma.tugas.findMany({
      where: { kelasId: user.kelasId },
      include: {
        mataPelajaran: true,
        submission: {
          where: { userId },
          take: 1,
        },
      },
      orderBy: { deadline: "asc" },
    });

    return tugas.map(t => {
      const sub = t.submission[0];

      return {
        id: t.id,
        title: t.title,
        description: t.description,
        deadline: t.deadline,
        mataPelajaran: t.mataPelajaran.nama,
        status: sub?.status ?? "belum_submit",
        submittedAt: sub?.submittedAt ?? null,
        link: sub?.linkUrl ?? null,
      };
    });
  };
}
