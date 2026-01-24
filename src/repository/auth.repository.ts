import { PrismaClient, User } from "../../dist/generated";

export class AuthRepository {
  constructor(private prisma: PrismaClient) {}

  // Cari user berdasarkan email
  findByEmail = async (email: string): Promise<User | null> => {
    return this.prisma.user.findUnique({ where: { email } });
  };

  // Update password / aktivasi pertama
  updatePassword = async (id: number, hashedPassword: string) => {
    return this.prisma.user.update({
      where: { id },
      data: { password: hashedPassword, activatedAt: new Date() },
    });
  };

  // Set OTP untuk aktivasi atau reset password
  setOtp = async (email: string, otp: string, otpExpiresAt: Date) => {
    return this.prisma.user.update({
      where: { email },
      data: { otp, otpExpiresAt },
    });
  };
}
