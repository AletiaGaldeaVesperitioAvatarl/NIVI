export class KelasService {
    kelasRepository;
    constructor(kelasRepository) {
        this.kelasRepository = kelasRepository;
    }
    getAllKelas = async () => {
        return this.kelasRepository.getAllKelas();
    };
    // GET ALL KELAS
    getAll = async () => {
        return this.kelasRepository.getAll();
    };
    getAllSantri = async () => {
        return this.kelasRepository.getAllSantri();
    };
    getAllSantriByAdmin = async () => {
        return this.kelasRepository.getAllSantriByAdmin();
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
    assignPengajarKeKelas = async (kelasId, pengajarIds) => {
        const kelas = await this.kelasRepository.getById(kelasId);
        if (!kelas)
            throw new Error("Kelas tidak ditemukan");
        return this.kelasRepository.assignPengajar(kelasId, pengajarIds);
    };
    setPengajarKelas = async (kelasId, pengajarIds) => {
        const kelas = await this.kelasRepository.getById(kelasId);
        if (!kelas)
            throw new Error("Kelas tidak ditemukan");
        return this.kelasRepository.setPengajar(kelasId, pengajarIds);
    };
    getKelasByPengajar = (pengajarId) => {
        return this.kelasRepository.findByPengajar(pengajarId);
    };
}
//# sourceMappingURL=kelas.service.js.map