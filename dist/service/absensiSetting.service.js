export class AbsensiSettingService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async getAll() {
        return this.repo.getAll();
    }
    async getByKelas(kelasId) {
        return this.repo.getByKelas(kelasId);
    }
    async createOrUpdate(kelasId, maxAbsen) {
        const exist = await this.repo.getByKelas(kelasId);
        if (exist)
            return this.repo.updateByKelas(kelasId, maxAbsen);
        return this.repo.create(kelasId, maxAbsen);
    }
    async updateById(id, maxAbsen) {
        return this.repo.updateById(id, maxAbsen);
    }
}
//# sourceMappingURL=absensiSetting.service.js.map