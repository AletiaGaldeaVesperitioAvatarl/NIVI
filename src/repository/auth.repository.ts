import { PrismaClient, User, Role } from "../generated/client";
import bcrypt from "bcrypt";

export class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  // CEK USER BY EMAIL
  getUserByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({
      where: { email },
    });
  };

  // CREATE NEW USER (REGISTER)
  createUser = async (data: {
    name: string;
    email: string;
    password: string;
    role: Role;
    kelasId?: number;
  }): Promise<User> => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  };

  // OPTIONAL: VERIFY PASSWORD
  verifyPassword = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(plainPassword, hashedPassword);
  };
}
