import { PrismaClient, Submission, StatusSubmission } from "../../dist/generated";

export class SubmissionRepository {
  constructor(private prisma: PrismaClient) {}

  // CREATE SUBMISSION
  async create(data: {
    tugasId: number;
    userId: number;
    fileUrl?: string;
    linkUrl?: string;
    status: StatusSubmission;
  }): Promise<Submission> {
    return this.prisma.submission.create({
      data,
    });
  }

  // GET ALL SUBMISSION
  async findAll(): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      include: {
        user: true,
        tugas: true,
      },
    });
  }

  // GET SUBMISSION BY ID
  async findById(id: number): Promise<Submission | null> {
    return this.prisma.submission.findUnique({
      where: { id },
      include: {
        user: true,
        tugas: true,
      },
    });
  }

  // GET SUBMISSION BY USER
  async findByUser(userId: number): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: { userId },
      include: {
        tugas: true,
      },
    });
  }

  // GET SUBMISSION BY TUGAS
  async findByTugas(tugasId: number): Promise<Submission[]> {
    return this.prisma.submission.findMany({
      where: { tugasId },
      include: {
        user: true,
      },
    });
  }

  // UPDATE STATUS / FILE
  async update(
    id: number,
    data: Partial<Submission>
  ): Promise<Submission> {
    return this.prisma.submission.update({
      where: { id },
      data,
    });
  }

  // DELETE SUBMISSION
  async delete(id: number): Promise<Submission> {
    return this.prisma.submission.delete({
      where: { id },
    });
  }
}
