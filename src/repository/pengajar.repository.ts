import { PrismaClient, Role, User } from "../../dist/generated";
import bcrypt from "bcrypt";

export class PengajarRepository {
  constructor(private prisma: PrismaClient) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { email } });
  };

  createUser = async (data: {
    name: string;
    email: string;
    password: string; // SUDAH HASH
  }): Promise<User> => {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: Role.pengajar,
      },
    });
  };

  hashPassword = async (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
}
