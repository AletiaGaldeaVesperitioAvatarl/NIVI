export class AbsensiRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.absensi.findMany({ include: { jadwal: true } });
    }
    getById(id) {
        return this.prisma.absensi.findUnique({
            where: { id },
            include: { jadwal: true },
        });
    }
    getByUserId(userId) {
        return this.prisma.absensi.findMany({
            where: { userId },
            include: { jadwal: true },
        });
    }
    getTodayByUser(userId) {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.findMany({
            where: { userId, tanggal: { gte: start, lte: end } },
            include: { jadwal: true },
        });
    }
    countTodayByUser(userId) {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.count({
            where: { userId, tanggal: { gte: start, lte: end } },
        });
    }
    create(data) {
        return this.prisma.absensi.create({
            data: {
                ...data,
                jadwalId: data.jadwalId ?? null, // ganti undefined jadi null
            },
            include: { jadwal: true },
        });
    }
    update(id, data) {
        return this.prisma.absensi.update({
            where: { id },
            data,
            include: { jadwal: true },
        });
    }
    delete(id) {
        return this.prisma.absensi.delete({
            where: { id },
            include: { jadwal: true },
        });
    }
    findByUserAndTanggal(userId, tanggal) {
        return this.prisma.absensi.findFirst({
            where: { userId, tanggal },
        });
    }
    createIzinAbsensi(userId, kelasId, tanggal) {
        return this.prisma.absensi.create({
            data: {
                userId,
                kelasId, // ✅ INI YANG HILANG
                tanggal,
                status: "izin",
            },
        });
    }
    countTodayByKelas(kelasId, tanggal) {
        return this.prisma.absensi.count({
            where: {
                kelasId,
                tanggal,
            },
        });
    }
    async countByKelasAndTanggal(kelasId, tanggal) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.count({
            where: {
                kelasId,
                tanggal: {
                    gte: start,
                    lte: end,
                },
            },
        });
    }
    findByKelasPaginated = async ({ kelasId, skip, take, sort, }) => {
        return this.prisma.absensi.findMany({
            where: { kelasId },
            orderBy: { tanggal: sort },
            skip,
            take,
        });
    };
    countByKelas = async (kelasId) => {
        return this.prisma.absensi.count({
            where: { kelasId },
        });
    };
    async countUserAbsensiByTanggal(userId, tanggal) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.count({
            where: {
                userId,
                tanggal: { gte: start, lte: end },
            },
        });
    }
    async countNonIzinAbsensiByTanggal(userId, tanggal) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.absensi.count({
            where: {
                userId,
                status: { not: "izin" }, // Hitung hanya hadir/telat/dll
                tanggal: { gte: start, lte: end },
            },
        });
    }
    async getUsersByKelas(kelasId) {
        return this.prisma.user.findMany({
            where: {
                kelasId,
                role: "santri",
                isActive: true,
            },
        });
    }
    getByIdWithUser(id) {
        return this.prisma.absensi.findUnique({
            where: { id },
            include: { user: true },
        });
    }
    countMonthly(userId, month, year) {
        return this.prisma.absensi.count({
            where: {
                userId,
                status: "alpha",
                tanggal: {
                    gte: new Date(year, month, 1),
                    lt: new Date(year, month + 1, 1),
                },
            },
        });
    }
    async findLastByUser(userId) {
        return this.prisma.absensi.findFirst({
            where: { userId },
            orderBy: { tanggal: "desc" }, // ambil absensi terbaru
        });
    }
    updateAI(id, data) {
        return this.prisma.absensi.update({
            where: { id },
            data,
        });
    }
    async countSpamToday(userId) {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999);
        // Ambil semua absensi hari ini
        const absensis = await this.prisma.absensi.findMany({
            where: {
                userId,
                tanggal: {
                    gte: todayStart,
                    lte: todayEnd,
                },
            },
            orderBy: { tanggal: "asc" },
        });
        let spamCount = 0;
        for (let i = 1; i < absensis.length; i++) {
            const current = absensis[i];
            const prev = absensis[i - 1];
            if (!current || !prev)
                continue;
            const diffMinutes = (current.tanggal.getTime() - prev.tanggal.getTime()) / 60000;
            if (diffMinutes < 5) {
                spamCount++;
            }
        }
        return spamCount;
    }
    getAbsensiByUserAndMonth(userId, start, end) {
        return this.prisma.absensi.findMany({
            where: {
                userId,
                tanggal: {
                    gte: start,
                    lte: end,
                },
            },
        });
    }
    getAbsensiByUserAndWeek(userId, start, end) {
        return this.prisma.absensi.findMany({
            where: {
                userId,
                tanggal: {
                    gte: start,
                    lte: end,
                },
            },
        });
    }
    countHadirMonthly(userId, month, year) {
        return this.prisma.absensi.count({
            where: {
                userId,
                status: "hadir", // Hitung yang statusnya hadir saja
                tanggal: {
                    gte: new Date(year, month, 1),
                    lt: new Date(year, month + 1, 1),
                },
            },
        });
    }
    // Ambil absensi user tapi hanya untuk tanggal tertentu
    async getAbsensiByUserAndDates(userId, dates) {
        if (!dates.length)
            return [];
        return this.prisma.absensi.findMany({
            where: {
                userId,
                tanggal: { in: dates },
            },
        });
    }
    async getByUserAndDates(userId, dates) {
        if (!dates.length)
            return Promise.resolve([]); // ⬅️ penting!
        const orConditions = dates.map(tanggal => ({
            tanggal,
        }));
        return this.prisma.absensi.findMany({
            where: {
                userId,
                OR: orConditions,
            },
        });
    }
    // Hitung berapa kali santri sudah absen hari ini
    async countAbsenHariIni(userId, kelasId, tanggal) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return await this.prisma.absensi.count({
            where: { userId, kelasId, tanggal: { gte: start, lte: end } },
        });
    }
    findByUserAndJadwal(userId, jadwalId) {
        return this.prisma.absensi.findFirst({
            where: {
                userId,
                jadwalId,
            },
        });
    }
}
//# sourceMappingURL=absensi.repository.js.map