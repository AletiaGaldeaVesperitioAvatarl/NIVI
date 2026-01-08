export class TugasService {
    tugasRepository;
    constructor(tugasRepository) {
        this.tugasRepository = tugasRepository;
    }
    // GET ALL TUGAS
    getAll = async () => {
        return this.tugasRepository.getAll();
    };
    // GET TUGAS BY ID
    getById = async (id) => {
        return this.tugasRepository.getById(id);
    };
    // CREATE NEW TUGAS
    createTugas = async (data) => {
        return this.tugasRepository.create(data);
    };
    // UPDATE TUGAS
    updateTugas = async (id, data) => {
        return this.tugasRepository.update(id, data);
    };
    // DELETE TUGAS
    deleteTugas = async (id) => {
        return this.tugasRepository.delete(id);
    };
    async getTasksForSantri(userId) {
        return this.tugasRepository.getTasksWithSubmission(userId);
    }
}
//# sourceMappingURL=tugas.service.js.map