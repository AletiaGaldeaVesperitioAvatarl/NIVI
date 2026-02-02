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
            where: { id },
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
                role: "santri",
            },
        });
    }
    async getPengajar() {
        return this.prisma.user.findMany({
            where: {
                role: "pengajar",
            },
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
    async activate(userId) {
        return this.prisma.user.update({
            where: { id: userId },
            data: { isActive: true, activatedAt: new Date() },
        });
    }
    async activateByRole(userId, role) {
        return this.prisma.user.updateMany({
            where: { id: userId, role },
            data: { isActive: true, activatedAt: new Date() },
        });
    }
    async findManyByKelas(kelasId) {
        return this.prisma.user.findMany({
            where: { kelasId },
            orderBy: { name: "asc" },
        });
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                isActive: true,
            },
        });
        // Urutkan Santri → Pengajar → Admin
        const rolesOrder = ["Santri", "Pengajar", "Admin"];
        users.sort((a, b) => rolesOrder.indexOf(a.role) - rolesOrder.indexOf(b.role));
        return users;
    }
}
//# sourceMappingURL=user.repository.js.map