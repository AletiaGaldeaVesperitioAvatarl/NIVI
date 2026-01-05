import { PrismaClient, Kelas } from "../../dist/generated/index.js";
export declare class KelasRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Kelas[]>;
    getById: (id: number) => Promise<Kelas | null>;
    create: (data: {
        namaKelas: string;
        deskripsi?: string;
    }) => Promise<Kelas>;
    update: (id: number, data: Partial<Kelas>) => Promise<Kelas>;
    delete: (id: number) => Promise<Kelas>;
}
//# sourceMappingURL=kelas.repository.d.ts.map
