import bcrypt from "bcrypt";
export class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getUserByEmail = async (email) => {
        return this.prisma.user.findUnique({ where: { email } });
    };
    createUser = async (data) => {
        return this.prisma.user.create({ data });
    };
    verifyPassword = async (plain, hashed) => {
        return bcrypt.compare(plain, hashed);
    };
    findByActivationToken = async (token) => {
        return this.prisma.user.findFirst({ where: { activationToken: token } });
    };
    activateUser = async (id, hashedPassword) => {
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
//# sourceMappingURL=auth.repository.js.map