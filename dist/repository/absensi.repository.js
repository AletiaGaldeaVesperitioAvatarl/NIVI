export class AbsensiRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL ABSENSI
    getAll = async () => {
        return this.prisma.absensi.findMany({
            include: {
                user: true, // relasi ke User
                kelas: true, // relasi ke Kelas
            },
        });
    };
    // GET ABSENSI BY ID
    getById = async (id) => {
        return this.prisma.absensi.findFirst({
            where: { id },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // GET ABSENSI BY USER ID
    getByUserId = async (userId) => {
        return this.prisma.absensi.findMany({
            where: { userId },
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // CREATE ABSENSI
    create = async (data) => {
        return this.prisma.absensi.create({
            data,
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // UPDATE ABSENSI
    update = async (id, data) => {
        return this.prisma.absensi.update({
            where: { id },
            data,
            include: {
                user: true,
                kelas: true,
            },
        });
    };
    // DELETE ABSENSI
    delete = async (id) => {
        return this.prisma.absensi.delete({
            where: { id },
        });
    };
}
//# sourceMappingURL=absensi.repository.js.map