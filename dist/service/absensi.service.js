export class AbsensiService {
    absensiRepository;
    constructor(absensiRepository) {
        this.absensiRepository = absensiRepository;
    }
    // GET ALL ABSENSI
    getAll = async () => {
        return this.absensiRepository.getAll();
    };
    // GET ABSENSI BY ID
    getById = async (id) => {
        return this.absensiRepository.getById(id);
    };
    // GET ABSENSI BY USER ID
    getByUserId = async (userId) => {
        return this.absensiRepository.getByUserId(userId);
    };
    // CREATE ABSENSI
    createAbsensi = async (data) => {
        return this.absensiRepository.create(data);
    };
    // UPDATE ABSENSI
    updateAbsensi = async (id, data) => {
        return this.absensiRepository.update(id, data);
    };
    // DELETE ABSENSI
    deleteAbsensi = async (id) => {
        return this.absensiRepository.delete(id);
    };
}
//# sourceMappingURL=absensi.service.js.map