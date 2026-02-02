export class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Cari user berdasarkan email
    findByEmail = async (email) => {
        return this.prisma.user.findUnique({ where: { email } });
    };
    // Update password / aktivasi pertama
    updatePassword = async (id, hashedPassword) => {
        return this.prisma.user.update({
            where: { id },
            data: { password: hashedPassword, activatedAt: new Date() },
        });
    };
    // Set OTP untuk aktivasi atau reset password
    setOtp = async (email, otp, otpExpiresAt) => {
        return this.prisma.user.update({
            where: { email },
            data: { otp, otpExpiresAt },
        });
    };
}
//# sourceMappingURL=auth.repository.js.map