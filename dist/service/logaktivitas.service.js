export class LogAktivitasService {
    logRepo;
    constructor(logRepo) {
        this.logRepo = logRepo;
    }
    // CREATE LOG (BIASA DIPAKE DI AUTH / ACTION PENTING)
    createLog = async (userId, aktivitas) => {
        return this.logRepo.create({
            userId,
            aktivitas,
        });
    };
    // GET ALL LOG
    getAllLogs = async () => {
        return this.logRepo.findAll();
    };
    // GET LOG BY USER
    getLogsByUser = async (userId) => {
        return this.logRepo.findByUserId(userId);
    };
    // DELETE LOG (ADMIN ONLY)
    deleteLog = async (id) => {
        return this.logRepo.delete(id);
    };
}
//# sourceMappingURL=logaktivitas.service.js.map