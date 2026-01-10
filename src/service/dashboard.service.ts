import { DashboardRepository } from "../repository/dashboard.repository";

export class DashboardService {
  constructor(private repo: DashboardRepository) {}

async getDashboardPengajar(pengajarId: number) {
  const today = new Date();
  today.setHours(0,0,0,0);

  const kelasIds = await this.repo.getKelasIdsByPengajar(pengajarId);

  if (kelasIds.length === 0) {
    return {
      totalSantri: 0,
      totalKelas: 0,
      absensi: { hadir:0, izin:0, sakit:0, alpha:0 },
      tugasAktif: 0,
      submissionMasuk: 0,
      izinPending: 0,
    };
  }

  const [
    totalSantri,
    totalKelas,
    absensiRaw,
    tugasAktif,
    submissionMasuk,
    izinPending,
  ] = await Promise.all([
    this.repo.getTotalSantriByPengajar(kelasIds),
    this.repo.getTotalKelasByPengajar(pengajarId),
    this.repo.getAbsensiHariIni(kelasIds, today),
    this.repo.getTugasAktifSantri(kelasIds, today),
    this.repo.getSubmissionMasuk(kelasIds),
    this.repo.getIzinPending(kelasIds),
  ]);

  const absensi = { hadir:0, izin:0, sakit:0, alpha:0 };
  absensiRaw.forEach(a => absensi[a.status] = a._count._all);

  return {
    totalSantri,
    totalKelas,
    absensi,
    tugasAktif,
    submissionMasuk,
    izinPending,
  };
}


  async getDashboard(userId: number) {
    const user = await this.repo.getKelasByUser(userId);
    if (!user || !user.kelas) throw new Error("User belum punya kelas");

    const today = new Date();

    const [
      absensiHariIni,
      kehadiran,
      tugas,
      riwayat,
    ] = await Promise.all([
      this.repo.getAbsensiHariSantri(userId, today),
      this.repo.getPersentaseKehadiran(userId),
      this.repo.getTugasAktif(user.kelas.id),
      this.repo.getRiwayatAbsensi(userId),
     
    ]);

    const total = kehadiran.reduce((a, b) => a + b._count, 0);
    const hadir = kehadiran.find(k => k.status === "hadir")?._count || 0;

    return {
      kelas: user.kelas.namaKelas,
      persentaseKehadiran: total === 0 ? 0 : Math.round((hadir / total) * 100),
      absensiHariIni,
      tugasAktif: tugas,
      riwayatAbsensi: riwayat,
    };
  }
}


