export class UserRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.user.findMany({
            where: { isActive: true },
        });
    }
    async findById(id) {
        return this.prisma.user.findFirst({
            where: { id, isActive: true },
        });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
    async create(data) {
        return this.prisma.user.create({
            data,
        });
    }
    async update(id, data) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    async deactivate(id) {
        return this.prisma.user.update({
            where: { id },
            data: { isActive: false },
        });
    }
    async getStats() {
        return this.prisma.user.aggregate({
            _count: { id: true },
        });
    }
    async getSantri() {
        return this.prisma.user.findMany({
            where: {
                role: "santri"
            }
        });
    }
    async getPengajar() {
        return this.prisma.user.findMany({
            where: {
                role: "pengajar"
            }
        });
    }
    async isAdminExist() {
        const admin = await this.prisma.user.findFirst({
            where: {
                role: "admin",
                isActive: true,
            },
        });
        return !!admin;
    }
}
//# sourceMappingURL=user.repository.js.map