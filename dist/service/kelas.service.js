export class KelasService {
    kelasRepository;
    constructor(kelasRepository) {
        this.kelasRepository = kelasRepository;
    }
    // GET ALL KELAS
    getAll = async () => {
        return this.kelasRepository.getAll();
    };
    // GET KELAS BY ID
    getById = async (id) => {
        return this.kelasRepository.getById(id);
    };
    // CREATE NEW KELAS
    createKelas = async (data) => {
        return this.kelasRepository.create(data);
    };
    // UPDATE KELAS
    updateKelas = async (id, data) => {
        return this.kelasRepository.update(id, data);
    };
    // DELETE KELAS
    deleteKelas = async (id) => {
        return this.kelasRepository.delete(id);
    };
}
//# sourceMappingURL=kelas.service.js.map