import { PrismaClient, Role, User } from "../../dist/generated";

export class AdminRepository {
  constructor(private prisma: PrismaClient) {}

  // CREATE SANTRI
    createSantriByAdmin = async (data: { name: string; email: string; kelasId: number }): Promise<User> => {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: Role.santri,
        kelasId: data.kelasId,
        password: "INACTIVE",    // harus aktivasi
        activatedAt: null,
        isActive: true,
      },
    });
  };

  // CREATE PENGAJAR
  createPengajarByAdmin = async (data: { name: string; email: string }): Promise<User> => {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        role: Role.pengajar,
        password: "INACTIVE",
        activatedAt: null,
        isActive: true,
      },
    });
  };

  // FIND USER BY EMAIL
  findByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { email } });
  };

  // UPDATE PASSWORD (AKTIVASI PERTAMA)
  updatePassword = async (id: number, hashedPassword: string) => {
    return this.prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
        activatedAt: new Date(),
      },
    });
  };

  // PENGAJAR / KELAS
  assignPengajar(kelasId: number, pengajarId: number) {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: { connect: { id: pengajarId } },
      },
    });
  }

  removePengajar(kelasId: number, pengajarId: number) {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: { pengajar: { disconnect: { id: pengajarId } } },
    });
  }

  getPengajarByKelas(kelasId: number) {
    return this.prisma.kelas.findUnique({
      where: { id: kelasId },
      select: {
        id: true,
        namaKelas: true,
        pengajar: { select: { id: true, name: true, email: true } },
      },
    });
  }

  createAdmin = async (data: { name: string; email: string; password: string }): Promise<User> => {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password, // sudah hashed di service
        role: Role.admin,
        isActive: true,
        activatedAt: new Date(),
      },
    });
  };

  getAllAdmins = async (): Promise<User[]> => {
    return this.prisma.user.findMany({ where: { role: Role.admin } });
  };

  getAdminById = async (id: number): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { id } });
  };

  updateAdmin = async (id: number, data: Partial<{ name: string; email: string; password: string }>) => {
    return this.prisma.user.update({ where: { id }, data });
  };

  deleteAdmin = async (id: number) => {
    return this.prisma.user.delete({ where: { id } });
  };
}
