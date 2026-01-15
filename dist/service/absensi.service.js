import { StatusAbsensi } from "../../dist/generated/index.js";
export class AbsensiService {
    absensiRepository;
    constructor(absensiRepository) {
        this.absensiRepository = absensiRepository;
    }
    // GET ALL ABSENSI
    getAll = async () => {
        return this.absensiRepository.getAll();
    };
    // GET ABSENSI BY ID
    getById = async (id) => {
        return this.absensiRepository.getById(id);
    };
    // GET ABSENSI BY USER ID
    getByUserId = async (userId) => {
        return this.absensiRepository.getByUserId(userId);
    };
    getTodayByUser = async (userId) => {
        return this.absensiRepository.getTodayByUser(userId);
    };
    absenHadir = async (userId, kelasId, status) => {
        const todayAbsensi = await this.absensiRepository.getTodayByUser(userId);
        if (todayAbsensi.length >= 4) {
            throw new Error("Absen hari ini sudah mencapai batas (4x)");
        }
        return this.absensiRepository.create({
            userId,
            kelasId,
            status
        });
    };
    // UPDATE ABSENSI
    updateAbsensi = async (id, data) => {
        return this.absensiRepository.update(id, data);
    };
    // DELETE ABSENSI
    deleteAbsensi = async (id) => {
        return this.absensiRepository.delete(id);
    };
    autoAlpha = async () => {
        const santriList = await this.absensiRepository.getAllSantriAktif();
        let totalAlpha = 0;
        for (const santri of santriList) {
            // skip santri tanpa kelas
            if (!santri.kelasId)
                continue;
            // cek absensi hari ini
            const todayAbsensi = await this.absensiRepository.getTodayByUser(santri.id);
            if (todayAbsensi.length > 0)
                continue;
            // cek izin
            const hasIzin = await this.absensiRepository.hasIzinToday(santri.id);
            if (hasIzin)
                continue;
            // auto alpha
            await this.absensiRepository.create({
                userId: santri.id,
                kelasId: santri.kelasId,
                status: StatusAbsensi.alpha,
            });
            totalAlpha++;
        }
        return totalAlpha;
    };
    rekapBulananPerKelas = async (kelasId, bulan // format: YYYY-MM
    ) => {
        const [year, month] = bulan.split("-").map(Number);
        if (!year || !month) {
            throw new Error("Format bulan harus YYY-MM");
        }
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 0, 23, 59, 59);
        const totalSantri = await this.absensiRepository.countSantriByKelas(kelasId);
        const absensi = await this.absensiRepository.getAbsensiByKelasAndMonth(kelasId, start, end);
        let hadir = 0;
        let izin = 0;
        let alpha = 0;
        absensi.forEach((a) => {
            if (a.status === "hadir")
                hadir++;
            if (a.status === "izin")
                izin++;
            if (a.status === "alpha")
                alpha++;
        });
        const totalAbsensi = hadir + izin + alpha;
        const persentaseHadir = totalAbsensi === 0
            ? 0
            : Math.round((hadir / totalAbsensi) * 100);
        return {
            kelasId,
            bulan,
            totalSantri,
            hadir,
            izin,
            alpha,
            persentaseHadir,
        };
    };
    getByKelasAndTanggal = async (kelasId, tanggal) => {
        return this.absensiRepository.getByKelasAndTanggal(kelasId, tanggal);
    };
    createAbsensiPerHari = async (kelasId, tanggal, data) => {
        return this.absensiRepository.createManyPerHari(kelasId, tanggal, data);
    };
    deleteByKelasAndTanggal = async (kelasId, tanggal) => {
        return this.absensiRepository.deleteByKelasAndTanggal(kelasId, tanggal);
    };
    generateAbsensiBulanan = async (kelasId, bulan) => {
        const [year, month] = bulan.split("-").map(Number);
        if (!year || !month)
            throw new Error("Format bulan salah");
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 0);
        const santri = await this.absensiRepository.getSantriByKelas(kelasId);
        let total = 0;
        for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const isWeekend = d.getDay() === 0 || d.getDay() === 6;
            if (isWeekend)
                continue;
            for (const s of santri) {
                const exists = await this.absensiRepository.exists(s.id, kelasId, d);
                if (exists)
                    continue;
                await this.absensiRepository.createManual({
                    userId: s.id,
                    kelasId,
                    status: StatusAbsensi.alpha,
                    tanggal: new Date(d),
                });
                total++;
            }
        }
        return { total };
    };
}
//# sourceMappingURL=absensi.service.js.map
