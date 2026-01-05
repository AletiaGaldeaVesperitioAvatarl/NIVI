export class IzinService {
    izinRepository;
    constructor(izinRepository) {
        this.izinRepository = izinRepository;
    }
    // GET ALL IZIN
    getAll = async () => {
        return this.izinRepository.getAll();
    };
    // GET IZIN BY ID
    getById = async (id) => {
        return this.izinRepository.getById(id);
    };
    // GET IZIN BY USER ID
    getByUserId = async (userId) => {
        return this.izinRepository.getByUserId(userId);
    };
    // CREATE IZIN
    createIzin = async (data) => {
        return this.izinRepository.create(data);
    };
    // UPDATE IZIN
    updateIzin = async (id, data) => {
        return this.izinRepository.update(id, data);
    };
    // DELETE IZIN
    deleteIzin = async (id) => {
        return this.izinRepository.delete(id);
    };
}
//# sourceMappingURL=izin.service.js.map