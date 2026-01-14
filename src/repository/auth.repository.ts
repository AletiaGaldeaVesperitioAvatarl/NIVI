import { PrismaClient, User, Role } from "../../dist/generated";
import bcrypt from "bcrypt";

export class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { email } });
  };

  createUser = async (data: {
    name: string;
    email: string;
    password: string;
    role: Role;
    kelasId?: number;
  }): Promise<User> => {
    return this.prisma.user.create({ data });
  };

  verifyPassword = async (plain: string, hashed: string) => {
    return bcrypt.compare(plain, hashed);
  };

  findByActivationToken = async (token: string): Promise<User | null> => {
    return this.prisma.user.findFirst({ where: { activationToken: token } });
  };

  activateUser = async (id: number, hashedPassword: string) => {
    // 🔹 pastikan return value diambil untuk pengecekan
    return this.prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
        activatedAt: new Date(),
        activationToken: null,
      },
    });
  };
}
