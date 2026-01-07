import { PrismaClient, Tugas } from "../../dist/generated";

export class TugasRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL TUGAS
  getAll = async (): Promise<Tugas[]> => {
    return this.prisma.tugas.findMany({
      include: {
        kelas: true,      // relasi ke Kelas
        creator: true,    // relasi ke User yang buat tugas
        submission: true, // relasi ke submission
        nilai: true       // relasi ke nilai
      },
    });
  };

  // GET TUGAS BY ID
  getById = async (id: number): Promise<Tugas | null> => {
    return this.prisma.tugas.findFirst({
      where: { id },
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      },
    });
  };

  // CREATE NEW TUGAS
  create = async (data: {
    kelasId: number;
    title: string;
    description?: string;
    deadline: Date;
    createdBy: number;
  }): Promise<Tugas> => {
    return this.prisma.tugas.create({
      data,
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      }
    });
  };

  // UPDATE TUGAS
  update = async (id: number, data: Partial<Tugas>): Promise<Tugas> => {
    return this.prisma.tugas.update({
      where: { id },
      data,
      include: {
        kelas: true,
        creator: true,
        submission: true,
        nilai: true
      }
    });
  };

  // DELETE TUGAS
  delete = async (id: number): Promise<Tugas> => {
    return this.prisma.tugas.delete({
      where: { id },
    });
  };
async getTasksWithSubmission(userId: number) {
  const tugas = await this.prisma.tugas.findMany({
    include: {
      submission: {
        where: { userId },
        take: 1,
      },
    },
    orderBy: { deadline: 'asc' },
  });

  return tugas.map(t => {
    const submission = t.submission[0];

    return {
      id: t.id,
      title: t.title,
      description: t.description,
      deadline: t.deadline,

      status: submission ? submission.status : 'pending',
      submission_link: submission?.linkUrl ?? null,
      submitted_at: submission?.submittedAt ?? null,
    };
  });
}


}
