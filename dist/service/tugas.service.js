export class TugasService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getAll = () => this.repo.getAll();
    getById = (id) => this.repo.getById(id);
    create = async (data) => {
        if (!data.kelasId)
            throw new Error("Kelas wajib diisi");
        if (!data.mataPelajaranId)
            throw new Error("Mata pelajaran wajib diisi");
        if (!data.title)
            throw new Error("Judul tugas wajib diisi");
        return this.repo.create(data);
    };
    update = (id, data) => {
        return this.repo.update(id, data);
    };
    delete = (id) => this.repo.delete(id);
    getForSantri = (userId) => {
        return this.repo.getForSantri(userId);
    };
}
//# sourceMappingURL=tugas.service.js.map