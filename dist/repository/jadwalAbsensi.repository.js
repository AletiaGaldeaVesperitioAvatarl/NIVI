export class JadwalAbsensiRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    countByKelas(kelasId) {
        return this.prisma.jadwalAbsensi.count({
            where: { kelasId },
        });
    }
    findActiveSchedule = async (kelasId, now, jadwalId) => {
        if (jadwalId) {
            return this.prisma.jadwalAbsensi.findUnique({ where: { id: jadwalId } });
        }
        // Tentukan hari ini
        let hari;
        switch (now.getDay()) {
            case 0:
                hari = "minggu";
                break;
            case 1:
                hari = "senin";
                break;
            case 2:
                hari = "selasa";
                break;
            case 3:
                hari = "rabu";
                break;
            case 4:
                hari = "kamis";
                break;
            case 5:
                hari = "jumat";
                break;
            case 6:
                hari = "sabtu";
                break;
            default:
                hari = "senin";
        }
        const startOfDay = new Date(now);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(now);
        endOfDay.setHours(23, 59, 59, 999);
        // Format jam sekarang sebagai "HH:mm" string
        const pad = (n) => n.toString().padStart(2, "0");
        const nowTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
        return this.prisma.jadwalAbsensi.findFirst({
            where: {
                kelasId,
                OR: [
                    // Jadwal khusus tanggal tertentu
                    {
                        tanggal: { gte: startOfDay, lte: endOfDay },
                        jamMulai: { lte: nowTime },
                        jamSelesai: { gte: nowTime },
                    },
                    // Jadwal rutin per hari
                    {
                        hari: hari,
                        jamMulai: { lte: nowTime },
                        jamSelesai: { gte: nowTime },
                    },
                ],
            },
            orderBy: [{ tanggal: "asc" }, { jamMulai: "asc" }],
        });
    };
    // CREATE single
    create = async (data) => {
        return this.prisma.jadwalAbsensi.create({ data });
    };
    findBentrok(kelasId, tanggal, jamMulai, jamSelesai) {
        return this.prisma.jadwalAbsensi.findFirst({
            where: {
                kelasId,
                tanggal,
                AND: [
                    { jamMulai: { lt: jamSelesai } },
                    { jamSelesai: { gt: jamMulai } },
                ],
            },
        });
    }
    // CREATE BULK 1 bulan atau rentang tanggal
    createBulk = async (kelasId, jamMulai, jamSelesai, tanggalMulai, tanggalSelesai) => {
        const jadwals = [];
        function getHariEnum(d) {
            switch (d.getDay()) {
                case 0:
                    return "minggu";
                case 1:
                    return "senin";
                case 2:
                    return "selasa";
                case 3:
                    return "rabu";
                case 4:
                    return "kamis";
                case 5:
                    return "jumat";
                case 6:
                    return "sabtu";
                default:
                    return "senin"; // fallback aman
            }
        }
        for (let d = new Date(tanggalMulai); d <= tanggalSelesai; d.setDate(d.getDate() + 1)) {
            const hariEnum = getHariEnum(d);
            jadwals.push({
                kelasId,
                hari: hariEnum,
                jamMulai,
                jamSelesai,
                tanggal: new Date(d),
            });
        }
        return this.prisma.jadwalAbsensi.createMany({ data: jadwals });
    };
    getAllByKelas = async (kelasId) => {
        return this.prisma.jadwalAbsensi.findMany({
            where: { kelasId },
            include: { absensi: true, kelas: true },
        });
    };
    getAllByKelasInRange = async (kelasId, startDate, endDate) => {
        return this.prisma.jadwalAbsensi.findMany({
            where: {
                kelasId,
                tanggal: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            include: {
                kelas: true,
                absensi: true,
            },
            orderBy: [{ tanggal: "asc" }, { jamMulai: "asc" }],
        });
    };
    getById = async (id) => {
        return this.prisma.jadwalAbsensi.findUnique({
            where: { id },
            include: { absensi: true, kelas: true },
        });
    };
    update = async (id, data) => {
        return this.prisma.jadwalAbsensi.update({ where: { id }, data });
    };
    delete = async (id) => {
        return this.prisma.jadwalAbsensi.delete({ where: { id } });
    };
    findByTanggal(kelasId, tanggal) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        return this.prisma.jadwalAbsensi.findFirst({
            where: {
                kelasId,
                tanggal: { gte: start, lte: end },
            },
        });
    }
    findByHari(kelasId, hari) {
        return this.prisma.jadwalAbsensi.findFirst({
            where: {
                kelasId,
                hari,
            },
        });
    }
    countByJadwalId = async (jadwalId) => {
        return this.prisma.absensi.count({
            where: {
                jadwalId: jadwalId,
            },
        });
    };
    countAbsensiByTanggalDanKelas(kelasId, tanggal) {
        return this.prisma.absensi.count({
            where: {
                kelasId,
                tanggal: {
                    gte: new Date(tanggal.setHours(0, 0, 0, 0)),
                    lt: new Date(tanggal.setHours(23, 59, 59, 999)),
                },
            },
        });
    }
    getByKelasAndTanggal(kelasId, tanggal, jamMulai // optional, kalau mau filter per sesi
    ) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        const where = {
            kelasId,
            tanggal: { gte: start, lte: end },
        };
        if (jamMulai) {
            where.jamMulai = jamMulai; // filter per sesi
        }
        return this.prisma.jadwalAbsensi.findMany({
            where,
            orderBy: { jamMulai: "asc" },
        });
    }
    // Optional: Ambil semua jadwal kelas (tanpa filter tanggal)
    async getByKelas(kelasId) {
        return this.prisma.jadwalAbsensi.findMany({
            where: { kelasId },
            orderBy: { jamMulai: "asc" },
        });
    }
    findByKelasHariJam = async (kelasId, hari, jamMulai) => {
        return this.prisma.jadwalAbsensi.findFirst({
            where: { kelasId, hari, jamMulai },
        });
    };
    findByKelasAndTanggal(kelasId, tanggal, jamMulai) {
        const start = new Date(tanggal);
        start.setHours(0, 0, 0, 0);
        const end = new Date(tanggal);
        end.setHours(23, 59, 59, 999);
        const where = {
            kelasId,
            tanggal: { gte: start, lte: end },
        };
        if (jamMulai) {
            where.jamMulai = jamMulai;
        }
        return this.prisma.jadwalAbsensi.findMany({
            where,
            orderBy: { jamMulai: "asc" },
        });
    }
}
//# sourceMappingURL=jadwalAbsensi.repository.js.map