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
      where: { id, isActive: true },
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

  async update(
  id: number,
  data: {
    name?: string;
    email?: string;
    role?: Role;
    kelasId?: number | null;
  }
): Promise<User> {
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

  async getSantri(){
    return this.prisma.user.findMany({
      where:{
        role:"santri",
        isActive: true
      }
    })
  }

  async getPengajar() {
    return this.prisma.user.findMany({
      where:{
        role:"pengajar",
        isActive: true
      }
    })
  }

}
