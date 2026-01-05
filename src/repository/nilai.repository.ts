import { PrismaClient, Nilai } from "../generated/client";

export class NilaiRepository {
  constructor(private prisma: PrismaClient) {}

  // GET ALL NILAI
  getAll = async (): Promise<Nilai[]> => {
    return this.prisma.nilai.findMany({
      include: {
        user: true,
        tugas: true,
      },
    });
  };

  // GET NILAI BY ID
  getById = async (id: number): Promise<Nilai | null> => {
    return this.prisma.nilai.findFirst({
      where: { id },
      include: {
        user: true,
        tugas: true,
      },
    });
  };

  // GET NILAI BY USER
  getByUserId = async (userId: number): Promise<Nilai[]> => {
    return this.prisma.nilai.findMany({
      where: { userId },
      include: {
        tugas: true,
      },
    });
  };

  // GET NILAI BY TUGAS
  getByTugasId = async (tugasId: number): Promise<Nilai[]> => {
    return this.prisma.nilai.findMany({
      where: { tugasId },
      include: {
        user: true,
      },
    });
  };

  // CREATE NILAI
  create = async (data: {
    userId: number;
    tugasId: number;
    nilai: number;
    catatan?: string;
  }): Promise<Nilai> => {
    return this.prisma.nilai.create({
      data,
      include: {
        user: true,
        tugas: true,
      },
    });
  };

  // UPDATE NILAI
  update = async (
    id: number,
    data: Partial<Nilai>
  ): Promise<Nilai> => {
    return this.prisma.nilai.update({
      where: { id },
      data,
      include: {
        user: true,
        tugas: true,
      },
    });
  };

  // DELETE NILAI
  delete = async (id: number): Promise<Nilai> => {
    return this.prisma.nilai.delete({
      where: { id },
    });
  };
}
