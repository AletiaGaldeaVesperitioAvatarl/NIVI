import { DashboardRepository } from "../repository/dashboard.repository";

export class DashboardService {
  constructor(private repo: DashboardRepository) {}

  async getDashboardPengajar(pengajarId: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const kelasIds = await this.repo.getKelasIdsByPengajar(pengajarId);

    const [
      totalSantri,
      totalKelas,
      absensiRaw,
      tugasAktif,
      submissionMasuk,
      izinPending,
    ] = await Promise.all([
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
      absensi[a.status] = a._count;
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
