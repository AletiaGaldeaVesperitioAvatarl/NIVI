import { DashboardRepository } from "../repository/dashboard.repository.js";
export declare class DashboardService {
    private repo;
    constructor(repo: DashboardRepository);
    getDashboardPengajar(pengajarId: number): Promise<{
        totalSantri: number;
        totalKelas: number;
        absensi: {
            hadir: number;
            izin: number;
            sakit: number;
            alpha: number;
        };
        tugasAktif: number;
        submissionMasuk: number;
        izinPending: number;
    }>;
}
//# sourceMappingURL=dashboard.service.d.ts.map
