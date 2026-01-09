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
        return this.prisma.user.create({
            data,
        });
    };
    verifyPassword = async (plainPassword, hashedPassword) => {
        return bcrypt.compare(plainPassword, hashedPassword);
    };
}
//# sourceMappingURL=auth.repository.js.map