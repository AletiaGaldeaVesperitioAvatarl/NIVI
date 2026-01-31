import { PrismaClient } from "../../dist/generated";


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
      where: { id, deletedAt:null },
      include: {
        kelas: true,
        mataPelajaran: true,
        creator: true,
        submission: true,
      },
    });
  };

  // 🔹 CREATE
  create(data: {
    title: string;
    description?: string;
    deadline: Date;
    kelasId: number;
    mataPelajaranId: number;
    createdBy: number;
  }) {
    return this.prisma.tugas.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        deadline: data.deadline,

        kelas: {
          connect: { id: data.kelasId },
        },

        mataPelajaran: {
          connect: { id: data.mataPelajaranId }, // 🔥 INI YANG KURANG
        },

        creator: {
          connect: { id: data.createdBy },
        },
      },
    });
  }

  // 🔹 UPDATE
  update = async (
    id: number,
    data: {
      title?: string;
      description?: string;
      deadline?: Date;
      mataPelajaranId?: number;
    },
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
  async getForSantri(userId: number) {
    const santri = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { kelasId: true },
    });

    if (!santri?.kelasId) return [];

    return this.prisma.tugas.findMany({
      where: {
        kelasId: santri.kelasId,
        deletedAt:null
      },
      include: {
        kelas: true,
        mataPelajaran: true,
        creator: true,
        submission: {
          where: {
            userId: userId,
          },
        },
      },
      orderBy: {
        deadline: "asc",
      },
    });
  }

async archiveExpiredForSantri(userId: number, tugasId: number) {
  const tugas = await this.prisma.tugas.findUnique({
    where: { id: tugasId },
    include: {
      submission: {
        where: { userId },
      },
    },
  });

  if (!tugas) {
    throw new Error("Tugas tidak ditemukan");
  }

  // 1️⃣ Validasi deadline
  if (new Date(tugas.deadline) > new Date()) {
    throw new Error("Tugas belum lewat deadline");
  }

  const submission = tugas.submission[0];

  // 2️⃣ Validasi submission (DIPISAH)
  if (submission) {
    // masih menunggu penilaian
    if (submission.status === "pending") {
      throw new Error("Tugas masih menunggu penilaian");
    }

    // reviewed atau rejected → BOLEH
    if (
      submission.status === "reviewed" ||
      submission.status === "rejected"
    ) {
      // lolos validasi
    }
  }

  // 3️⃣ Arsipkan (soft delete)
  return this.prisma.tugas.update({
    where: { id: tugasId },
    data: {
      deletedAt: new Date(),
    },
  });
}

async getArchivedForSantri(userId: number) {
  // 1️⃣ Ambil kelas santri
  const santri = await this.prisma.user.findUnique({
    where: { id: userId },
    select: { kelasId: true },
  });

  if (!santri?.kelasId) return [];

  // 2️⃣ Ambil tugas yang sudah diarsipkan (soft delete)
  return this.prisma.tugas.findMany({
    where: {
      kelasId: santri.kelasId,
      deletedAt: {
        not: null, // 👈 hanya tugas yang sudah dihapus
      },
    },
    include: {
      mataPelajaran: true,
      creator: true,
      submission: {
        where: {
          userId: userId, // submission milik santri ini saja
        },
      },
    },
    orderBy: {
      deletedAt: "desc", // terbaru di atas
    },
  });
}


}
