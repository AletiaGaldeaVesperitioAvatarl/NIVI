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
    create = async (data) => {
        return this.prisma.absensi.create({
            data: {
                userId: data.userId,
                kelasId: data.kelasId,
                status: data.status,
                tanggal: new Date(),
            },
        });
    };
    getTodayByUser = async (userId) => {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.findMany({
            where: {
                userId,
                tanggal: {
                    gte: start,
                    lte: end,
                },
            },
            orderBy: { tanggal: "asc" },
        });
    };
    // AUTO ALPHA SUPPORT
    // ambil semua santri aktif
    getAllSantriAktif = async () => {
        return this.prisma.user.findMany({
            where: {
                role: "santri",
                isActive: true,
            },
            select: {
                id: true,
                kelasId: true,
            },
        });
    };
    // ambil absensi hari ini by user
    hasIzinToday = async (userId) => {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const izin = await this.prisma.izin.findFirst({
            where: {
                userId,
                status: "disetujui",
                tanggal: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });
        return !!izin;
    };
    // AMBIL JUMLAH SANTRI PER KELAS
    countSantriByKelas = async (kelasId) => {
        return this.prisma.user.count({
            where: {
                role: "santri",
                kelasId,
                isActive: true,
            },
        });
    };
    // AMBIL ABSENSI PER KELAS & BULAN
    getAbsensiByKelasAndMonth = async (kelasId, start, end) => {
        return this.prisma.absensi.findMany({
            where: {
                kelasId,
                tanggal: {
                    gte: start,
                    lte: end,
                },
            },
        });
    };
    getByKelasAndTanggal = async (kelasId, tanggal) => {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.findMany({
            where: {
                kelasId,
                tanggal: { gte: start, lte: end },
            },
            include: {
                user: true,
            },
        });
    };
    createManyPerHari = async (kelasId, tanggal, data) => {
        return this.prisma.absensi.createMany({
            data: data.map((d) => ({
                userId: d.userId,
                kelasId,
                status: d.status,
                tanggal,
            })),
        });
    };
    deleteByKelasAndTanggal = async (kelasId, tanggal) => {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.deleteMany({
            where: {
                kelasId,
                tanggal: { gte: start, lte: end },
            },
        });
    };
    getSantriByKelas = async (kelasId) => {
        return this.prisma.user.findMany({
            where: {
                kelasId,
                role: "santri",
                isActive: true,
            },
            select: { id: true },
        });
    };
    exists = async (userId, kelasId, tanggal) => {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        const count = await this.prisma.absensi.count({
            where: {
                userId,
                kelasId,
                tanggal: { gte: start, lte: end },
            },
        });
        return count > 0;
    };
    createManual = async (data) => {
        return this.prisma.absensi.create({ data });
    };
}
//# sourceMappingURL=absensi.repository.js.map