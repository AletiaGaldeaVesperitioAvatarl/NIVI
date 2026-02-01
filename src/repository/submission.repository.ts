import { PrismaClient, Prisma, Submission } from "../../dist/generated";

export class SubmissionRepository {
  constructor(private prisma: PrismaClient) {}

  /**
   * ========== CREATE ==========
   */
  create(data: Prisma.SubmissionCreateInput): Promise<Submission> {
  return this.prisma.submission.create({
    data,
    include: {
      tugas: {
        select: {
          id: true,
          kelasId: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}


  /**
   * ========== READ ==========
   */

  // by primary key
  findById(id: number): Promise<Submission | null> {
    return this.prisma.submission.findUnique({
      where: { id },
      include: {
        user: true,
        tugas: true,
        nilai: true,
      },
    });
  }

  // dipakai di NilaiService
  findByUserAndTugas(
    userId: number,
    tugasId: number
  ): Promise<Submission | null> {
    return this.prisma.submission.findUnique({
      where: {
        userId_tugasId: {
          userId,
          tugasId,
        },
      },
    });
  }

  // santri: submission milik sendiri
  findForSantri(userId: number): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: { userId },
      include: {
        tugas: true,
        nilai: true,
      },
    });
  }

  // pengajar: semua submission dari kelas yang dia ajar
  findForPengajar(pengajarId: number): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        deletedAt:null,
        tugas: {
          kelas: {
            pengajar: {
              some: {
                id: pengajarId,
              },
            },
          },
        },
      },
      include: {
        user: true, // santri
        tugas: {
          include: {
            kelas: true,
            mataPelajaran: true,
          },
        },
        nilai: true,
      },
    });
  }

    findArsipForPengajar(pengajarId: number): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: {
        tugas: {
          kelas: {
            pengajar: {
              some: {
                id: pengajarId,
              },
            },
          },
        },
      },
      include: {
        user: true, // santri
        tugas: {
          include: {
            kelas: true,
            mataPelajaran: true,
          },
        },
        nilai: true,
      },
    });
  }

  /**
   * ========== UPDATE ==========
   */
  update(
    id: number,
    data: Prisma.SubmissionUpdateInput
  ): Promise<Submission> {
    return this.prisma.submission.update({
      where: { id },
      data,
    });
  }

  /**
   * ========== DELETE ==========
   */
  delete(id: number): Promise<Submission> {
    return this.prisma.submission.delete({
      where: { id },
    });
  }
  
  softDelete(id:number):Promise<Submission> {
    return this.prisma.submission.update({
      where:{id},
      data:{
        deletedAt: new Date()
      }
    })
  }

  restore(id:number):Promise<Submission>{
    return this.prisma.submission.update({
      where:{ id},
      data:{
        deletedAt:null
      }
    })
  }
}
