import { PrismaClient, Role, User } from "../../dist/generated";
import bcrypt from "bcrypt"

export class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  getUserByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { email } });
  };

  createUser = async (data: {
    name: string;
    email: string;
    password: string; // SUDAH HASH
    role: Role;
    kelasId?: number;
  }): Promise<User> => {
    return this.prisma.user.create({
      data,
    });
  };

  verifyPassword = async (
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return bcrypt.compare(plainPassword, hashedPassword);
  };
}
