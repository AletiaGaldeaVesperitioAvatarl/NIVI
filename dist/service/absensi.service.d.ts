import { Absensi, StatusAbsensi } from "../../dist/generated/index.js";
import { AbsensiRepository } from "../repository/absensi.repository.js";
export declare class AbsensiService {
    private absensiRepository;
    constructor(absensiRepository: AbsensiRepository);
    getAll: () => Promise<Absensi[]>;
    getById: (id: number) => Promise<Absensi | null>;
    getByUserId: (userId: number) => Promise<Absensi[]>;
    getTodayByUser: (userId: number) => Promise<Absensi[]>;
    absenHadir: (userId: number, kelasId: number, status: StatusAbsensi) => Promise<Absensi>;
    updateAbsensi: (id: number, data: Partial<Absensi>) => Promise<Absensi>;
    deleteAbsensi: (id: number) => Promise<Absensi>;
}
//# sourceMappingURL=absensi.service.d.ts.map
