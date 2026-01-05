import { IzinRepository } from "../repository/izin.repository.js";
import { Izin, StatusIzin } from "../generated/client.js";
export declare class IzinService {
    private izinRepository;
    constructor(izinRepository: IzinRepository);
    getAll: () => Promise<Izin[]>;
    getById: (id: number) => Promise<Izin | null>;
    getByUserId: (userId: number) => Promise<Izin[]>;
    createIzin: (data: {
        userId: number;
        kelasId: number;
        tanggal: Date;
        alasan: string;
        status?: StatusIzin;
    }) => Promise<Izin>;
    updateIzin: (id: number, data: Partial<Izin>) => Promise<Izin>;
    deleteIzin: (id: number) => Promise<Izin>;
}
//# sourceMappingURL=izin.service.d.ts.map
