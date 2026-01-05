export class NilaiService {
    nilaiRepository;
    constructor(nilaiRepository) {
        this.nilaiRepository = nilaiRepository;
    }
    // GET ALL NILAI
    getAll = async () => {
        return this.nilaiRepository.getAll();
    };
    // GET NILAI BY ID
    getById = async (id) => {
        return this.nilaiRepository.getById(id);
    };
    // GET NILAI BY USER
    getByUserId = async (userId) => {
        return this.nilaiRepository.getByUserId(userId);
    };
    // GET NILAI BY TUGAS
    getByTugasId = async (tugasId) => {
        return this.nilaiRepository.getByTugasId(tugasId);
    };
    // CREATE NILAI
    createNilai = async (data) => {
        return this.nilaiRepository.create(data);
    };
    // UPDATE NILAI
    updateNilai = async (id, data) => {
        return this.nilaiRepository.update(id, data);
    };
    // DELETE NILAI
    deleteNilai = async (id) => {
        return this.nilaiRepository.delete(id);
    };
}
//# sourceMappingURL=nilai.service.js.map