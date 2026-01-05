export class LogAktivitasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // CREATE LOG
    async create(data) {
        return this.prisma.logAktivitas.create({
            data,
        });
    }
    // GET ALL LOG
    async findAll() {
        return this.prisma.logAktivitas.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                user: true,
            },
        });
    }
    // GET LOG BY USER
    async findByUserId(userId) {
        return this.prisma.logAktivitas.findMany({
            where: { userId },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    // DELETE LOG (OPSIONAL, BUAT ADMIN)
    async delete(id) {
        return this.prisma.logAktivitas.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=logAktivitas.repository.js.map