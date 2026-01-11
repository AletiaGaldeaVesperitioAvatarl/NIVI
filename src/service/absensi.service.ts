import { Absensi, StatusAbsensi } from "../../dist/generated";
import { AbsensiRepository } from "../repository/absensi.repository";

export class AbsensiService {
  constructor(private absensiRepository: AbsensiRepository) {}

  // GET ALL ABSENSI
  getAll = async (): Promise<Absensi[]> => {
    return this.absensiRepository.getAll();
  };

  // GET ABSENSI BY ID
  getById = async (id: number): Promise<Absensi | null> => {
    return this.absensiRepository.getById(id);
  };

  // GET ABSENSI BY USER ID
  getByUserId = async (userId: number): Promise<Absensi[]> => {
    return this.absensiRepository.getByUserId(userId);
  };

  getTodayByUser = async (userId: number): Promise<Absensi[]> => {
    return this.absensiRepository.getTodayByUser(userId);
  };

  absenHadir = async (userId: number, kelasId: number , status:StatusAbsensi): Promise<Absensi> => {
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
  updateAbsensi = async (
    id: number,
    data: Partial<Absensi>
  ): Promise<Absensi> => {
    return this.absensiRepository.update(id, data);
  };

  

  // DELETE ABSENSI
  deleteAbsensi = async (id: number): Promise<Absensi> => {
    return this.absensiRepository.delete(id);
  };
  autoAlpha = async (): Promise<number> => {
    const santriList =
      await this.absensiRepository.getAllSantriAktif();

    let totalAlpha = 0;

    for (const santri of santriList) {
      // skip santri tanpa kelas
      if (!santri.kelasId) continue;

      // cek absensi hari ini
      const todayAbsensi =
        await this.absensiRepository.getTodayByUser(santri.id);

      if (todayAbsensi.length > 0) continue;

      // cek izin
      const hasIzin =
        await this.absensiRepository.hasIzinToday(santri.id);

      if (hasIzin) continue;

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

}