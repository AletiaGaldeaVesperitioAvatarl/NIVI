export class IzinRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL IZIN
    getAll = async () => {
        return this.prisma.izin.findMany({
            where: {
                deletedAt: null
            },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    getAllByPengajar = async (pengajarId) => {
        return this.prisma.izin.findMany({
            where: {
                deletedAt: null,
                kelas: {
                    pengajar: {
                        some: {
                            id: pengajarId
                        }
                    }
                }
            },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    getAllArchived = async (pengajarId) => {
        return this.prisma.izin.findMany({
            where: {
                deletedAt: {
                    not: null,
                },
                kelas: {
                    pengajar: {
                        some: {
                            id: pengajarId
                        }
                    }
                }
            },
            include: {
                user: true,
                kelas: true,
            },
            orderBy: {
                deletedAt: "desc",
            },
        });
    };
    softDelete = async (id) => {
        const izin = await this.prisma.izin.findUnique({ where: { id } });
        if (izin?.status === "menunggu") {
            throw new Error("Izin belum diproses");
        }
        return this.prisma.izin.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    };
    // GET IZIN BY ID
    getById = async (id) => {
        return this.prisma.izin.findFirst({
            where: { id },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // GET IZIN BY USER ID
    getByUserId = async (userId) => {
        return this.prisma.izin.findMany({
            where: { userId },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // CREATE IZIN
    create = async (data) => {
        return this.prisma.izin.create({
            data: {
                ...data,
                status: data.status || "menunggu",
            },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // UPDATE IZIN
    update = async (id, data) => {
        return this.prisma.izin.update({
            where: { id },
            data,
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // DELETE IZIN
    delete = async (id) => {
        return this.prisma.izin.delete({
            where: { id },
        });
    };
    async findByUserAndDate(userId, kelasId, tanggal, status) {
        const query = {
            userId,
            kelasId,
            tanggal,
        };
        if (status)
            query.status = status;
        return this.prisma.izin.findFirst({ where: query });
    }
    async countMonthly(userId) {
        const start = new Date();
        start.setDate(1);
        start.setHours(0, 0, 0, 0);
        return this.prisma.izin.count({
            where: {
                userId,
                tanggal: {
                    gte: start,
                },
            },
        });
    }
    async getIzinByUserAndMonth(userId, start, end) {
        return this.prisma.izin.findMany({
            where: {
                userId,
                tanggal: { gte: start, lte: end },
                status: "disetujui"
            },
            orderBy: { tanggal: "asc" },
        });
    }
}
//# sourceMappingURL=izin.repository.js.map