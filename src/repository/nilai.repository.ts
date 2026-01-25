import { PrismaClient, Prisma, Nilai } from "../../dist/generated";

export class NilaiRepository {
  constructor(private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.nilai.findMany({
      include: {
        submission: {
          include: {
            user: true,
            tugas: true,
          },
        },
      },
    });
  }

  findBySubmissionId(submissionId: number) {
    return this.prisma.nilai.findUnique({
      where: { submissionId },
    });
  }

  create(data: Prisma.NilaiCreateInput): Promise<Nilai> {
    return this.prisma.nilai.create({ data });
  }

  update(submissionId: number, data: Prisma.NilaiUpdateInput) {
    return this.prisma.nilai.update({
      where: { submissionId },
      data,
    });
  }

  delete(submissionId: number) {
    return this.prisma.nilai.delete({
      where: { submissionId },
    });
  }
}
