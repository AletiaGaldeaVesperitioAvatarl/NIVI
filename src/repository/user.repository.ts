import { PrismaClient, Role, User } from "../../dist/generated";

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { isActive: true },
    });
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
    role: Role;
    kelasId?: number;
  }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deactivate(id: number): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
  }

  async getStats() {
    return this.prisma.user.aggregate({
      _count: { id: true },
    });
  }

  async getSantri() {
    return this.prisma.user.findMany({
      where: {
        role: "santri",
      },
    });
  }

  async getPengajar() {
    return this.prisma.user.findMany({
      where: {
        role: "pengajar",
      },
    });
  }

  async isAdminExist(): Promise<boolean> {
    const admin = await this.prisma.user.findFirst({
      where: {
        role: "admin",
        isActive: true,
      },
    });

    return !!admin;
  }

  async activate(userId: number) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { isActive: true, activatedAt: new Date() },
    });
  }

  async activateByRole(userId: number, role: Role) {
    return this.prisma.user.updateMany({
      where: { id: userId, role },
      data: { isActive: true, activatedAt: new Date() },
    });
  }
  
    async findManyByKelas(kelasId: number) {
    return this.prisma.user.findMany({
      where: { kelasId },
      orderBy: { name: "asc" },
    });
  }


    async getAllUsers() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
      },
    });
    // Urutkan Santri → Pengajar → Admin
    const rolesOrder = ["Santri", "Pengajar", "Admin"];
    users.sort((a, b) => rolesOrder.indexOf(a.role) - rolesOrder.indexOf(b.role));
    return users;
  }

}
