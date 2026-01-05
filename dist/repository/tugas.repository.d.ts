import { PrismaClient, Tugas } from "../../dist/generated/index.js";
export declare class TugasRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Tugas[]>;
    getById: (id: number) => Promise<Tugas | null>;
    create: (data: {
        kelasId: number;
        title: string;
        description?: string;
        deadline: Date;
        createdBy: number;
    }) => Promise<Tugas>;
    update: (id: number, data: Partial<Tugas>) => Promise<Tugas>;
    delete: (id: number) => Promise<Tugas>;
}
//# sourceMappingURL=tugas.repository.d.ts.map
