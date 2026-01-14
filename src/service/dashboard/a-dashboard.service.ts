import { AdminDashboardRepository } from "../../repository/dashboard/a-dashboard.repository";

export class AdminDashboardService {
  constructor(private repo: AdminDashboardRepository) {}

  async getDashboardAdmin() {
    const today = new Date();

    const [
      totalSantri,
      totalPengajar,
      totalAdmin,
      totalKelas,
      absensiRaw,
      tugasAktif,
      submissionMasuk,
      izinPending,
    ] = await Promise.all([
      this.repo.getTotalSantri(),
      this.repo.getTotalPengajar(),
      this.repo.getTotalAdmin(),
      this.repo.getTotalKelas(),
      this.repo.getAbsensiHariIni(today),
      this.repo.getTugasAktif(today),
      this.repo.getSubmissionMasukHariIni(today),
      this.repo.getIzinPending(),
    ]);

    const absensi = { hadir: 0, izin: 0, sakit: 0, alpha: 0 };
    absensiRaw.forEach((a) => (absensi[a.status] = a._count._all));

    return {
      totalSantri,
      totalPengajar,
      totalAdmin,
      totalKelas,
      absensi,
      tugasAktif,
      submissionMasuk,
      izinPending,
    };
  }
}
