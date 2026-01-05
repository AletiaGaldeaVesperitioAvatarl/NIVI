import { NilaiRepository } from "../repository/nilai.repository.js";
import { Nilai } from "../../dist/generated/index.js";
export declare class NilaiService {
    private nilaiRepository;
    constructor(nilaiRepository: NilaiRepository);
    getAll: () => Promise<Nilai[]>;
    getById: (id: number) => Promise<Nilai | null>;
    getByUserId: (userId: number) => Promise<Nilai[]>;
    getByTugasId: (tugasId: number) => Promise<Nilai[]>;
    createNilai: (data: {
        userId: number;
        tugasId: number;
        nilai: number;
        catatan?: string;
    }) => Promise<Nilai>;
    updateNilai: (id: number, data: Partial<Nilai>) => Promise<Nilai>;
    deleteNilai: (id: number) => Promise<Nilai>;
}
//# sourceMappingURL=nilai.service.d.ts.map
