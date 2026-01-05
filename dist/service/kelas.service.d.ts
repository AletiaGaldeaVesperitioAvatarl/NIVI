import { Kelas } from "../../dist/generated/index.js";
import { KelasRepository } from "../repository/kelas.repository.js";
export declare class KelasService {
    private kelasRepository;
    constructor(kelasRepository: KelasRepository);
    getAll: () => Promise<Kelas[]>;
    getById: (id: number) => Promise<Kelas | null>;
    createKelas: (data: {
        namaKelas: string;
        deskripsi?: string;
    }) => Promise<Kelas>;
    updateKelas: (id: number, data: Partial<Kelas>) => Promise<Kelas>;
    deleteKelas: (id: number) => Promise<Kelas>;
}
//# sourceMappingURL=kelas.service.d.ts.map
