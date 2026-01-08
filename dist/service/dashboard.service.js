export class DashboardService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getDashboardPengajar(pengajarId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const kelasIds = await this.repo.getKelasIdsByPengajar(pengajarId);
        const [totalSantri, totalKelas, absensiRaw, tugasAktif, submissionMasuk, izinPending,] = await Promise.all([
            this.repo.getTotalSantriByPengajar(pengajarId),
            this.repo.getTotalKelasByPengajar(pengajarId),
            this.repo.getAbsensiHariIni(kelasIds, today),
            this.repo.getTugasAktif(kelasIds, today),
            this.repo.getSubmissionMasuk(kelasIds),
            this.repo.getIzinPending(kelasIds),
        ]);
        const absensi = {
            hadir: 0,
            izin: 0,
            sakit: 0,
            alpha: 0,
        };
        absensiRaw.forEach((a) => {
            absensi[a.status] = a._count._all;
        });
        return {
            totalSantri,
            totalKelas,
            absensi,
            tugasAktif,
            submissionMasuk,
            izinPending,
        };
    }
}
//# sourceMappingURL=dashboard.service.js.map