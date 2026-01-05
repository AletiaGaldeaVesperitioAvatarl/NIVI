import bcrypt from "bcrypt";
export class AuthRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // CEK USER BY EMAIL
    getUserByEmail = async (email) => {
        return this.prisma.user.findUnique({
            where: { email },
        });
    };
    // CREATE NEW USER (REGISTER)
    createUser = async (data) => {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.prisma.user.create({
            data: {
                ...data,
                password: hashedPassword,
            },
        });
    };
    // OPTIONAL: VERIFY PASSWORD
    verifyPassword = async (plainPassword, hashedPassword) => {
        return bcrypt.compare(plainPassword, hashedPassword);
    };
}
//# sourceMappingURL=auth.repository.js.map