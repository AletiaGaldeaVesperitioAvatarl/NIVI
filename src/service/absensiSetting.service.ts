import { AbsensiSettingRepository } from "../repository/absensiSetting.repository";

export class AbsensiSettingService {
  constructor(private repo: AbsensiSettingRepository) {}

  async getAll() {
    return this.repo.getAll();
  }

  async getByKelas(kelasId: number) {
    return this.repo.getByKelas(kelasId);
  }

  async createOrUpdate(kelasId: number, maxAbsen: number) {
    const exist = await this.repo.getByKelas(kelasId);
    if (exist) return this.repo.updateByKelas(kelasId, maxAbsen);
    return this.repo.create(kelasId, maxAbsen);
  }

  async updateById(id: number, maxAbsen: number) {
    return this.repo.updateById(id, maxAbsen);
  }
}
