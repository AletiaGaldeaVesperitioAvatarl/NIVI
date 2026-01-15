export class MataPelajaranService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getAll = () => this.repo.getAll();
    getById = (id) => this.repo.getById(id);
    create = async (data) => {
        if (!data.nama) {
            throw new Error("Nama mata pelajaran wajib diisi");
        }
        if (!data.kode) {
            throw new Error("Kode mata pelajaran wajib diisi");
        }
        return this.repo.create(data);
    };
    update = async (id, data) => {
        return this.repo.update(id, data);
    };
    delete = async (id) => {
        return this.repo.delete(id);
    };
}
//# sourceMappingURL=mataPelajaran.service.js.map