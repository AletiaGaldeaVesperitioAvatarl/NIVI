export class PengajarService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    createPengajar = async (data) => {
        // 1️⃣ Cek email
        const existing = await this.prisma.getUserByEmail(data.email);
        if (existing)
            throw new Error("Email sudah digunakan");
        // 2️⃣ Hash password
        const hashedPassword = await this.prisma.hashPassword(data.password);
        // 3️⃣ Create user
        const user = await this.prisma.createUser({
            name: data.name,
            email: data.email,
            password: hashedPassword,
        });
        return user; // hanya user, tidak ada profile
    };
}
//# sourceMappingURL=pengajar.service.js.map