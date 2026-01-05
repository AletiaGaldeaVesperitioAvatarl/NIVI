import { PrismaClient, Absensi } from "../../dist/generated/index.js";
export declare class AbsensiRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Absensi[]>;
    getById: (id: number) => Promise<Absensi | null>;
    getByUserId: (userId: number) => Promise<Absensi[]>;
    create: (data: {
        userId: number;
        kelasId: number;
        tanggal: Date;
        status: "hadir" | "izin" | "alpha";
    }) => Promise<Absensi>;
    update: (id: number, data: Partial<Absensi>) => Promise<Absensi>;
    delete: (id: number) => Promise<Absensi>;
}
//# sourceMappingURL=absensi.repository.d.ts.map
