export class IzinRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL IZIN
    getAll = async () => {
        return this.prisma.izin.findMany({
            include: {
                user: true,
                kelas: true,
            },
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
}
//# sourceMappingURL=izin.repository.js.map