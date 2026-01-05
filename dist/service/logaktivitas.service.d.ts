import { LogAktivitas } from "../generated/client.js";
import { LogAktivitasRepository } from "../repository/logAktivitas.repository.js";
export declare class LogAktivitasService {
    private logRepo;
    constructor(logRepo: LogAktivitasRepository);
    createLog: (userId: number, aktivitas: string) => Promise<LogAktivitas>;
    getAllLogs: () => Promise<LogAktivitas[]>;
    getLogsByUser: (userId: number) => Promise<LogAktivitas[]>;
    deleteLog: (id: number) => Promise<LogAktivitas>;
}
//# sourceMappingURL=logaktivitas.service.d.ts.map
