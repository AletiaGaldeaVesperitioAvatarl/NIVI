import { PrismaClient, Nilai } from "../../dist/generated/index.js";
export declare class NilaiRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Nilai[]>;
    getById: (id: number) => Promise<Nilai | null>;
    getByUserId: (userId: number) => Promise<Nilai[]>;
    getByTugasId: (tugasId: number) => Promise<Nilai[]>;
    create: (data: {
        userId: number;
        tugasId: number;
        nilai: number;
        catatan?: string;
    }) => Promise<Nilai>;
    update: (id: number, data: Partial<Nilai>) => Promise<Nilai>;
    delete: (id: number) => Promise<Nilai>;
}
//# sourceMappingURL=nilai.repository.d.ts.map
