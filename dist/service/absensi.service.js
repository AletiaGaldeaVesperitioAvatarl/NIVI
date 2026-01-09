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
    getTodayByUser = async (userId) => {
        return this.absensiRepository.getTodayByUser(userId);
    };
    absenHadir = async (userId, kelasId, status) => {
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
    updateAbsensi = async (id, data) => {
        return this.absensiRepository.update(id, data);
    };
    // DELETE ABSENSI
    deleteAbsensi = async (id) => {
        return this.absensiRepository.delete(id);
    };
}
//# sourceMappingURL=absensi.service.js.map