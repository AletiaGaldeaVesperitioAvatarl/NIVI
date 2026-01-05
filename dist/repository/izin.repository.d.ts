import { PrismaClient, Izin } from "../../dist/generated/index.js";
export declare class IzinRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Izin[]>;
    getById: (id: number) => Promise<Izin | null>;
    getByUserId: (userId: number) => Promise<Izin[]>;
    create: (data: {
        userId: number;
        kelasId: number;
        tanggal: Date;
        alasan: string;
        status?: "menunggu" | "disetujui" | "ditolak";
    }) => Promise<Izin>;
    update: (id: number, data: Partial<Izin>) => Promise<Izin>;
    delete: (id: number) => Promise<Izin>;
}
//# sourceMappingURL=izin.repository.d.ts.map
