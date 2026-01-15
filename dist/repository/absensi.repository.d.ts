import { PrismaClient, Absensi, StatusAbsensi } from "../../dist/generated/index.js";
export declare class AbsensiRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<Absensi[]>;
    getById: (id: number) => Promise<Absensi | null>;
    getByUserId: (userId: number) => Promise<Absensi[]>;
    update: (id: number, data: Partial<Absensi>) => Promise<Absensi>;
    delete: (id: number) => Promise<Absensi>;
    create: (data: {
        userId: number;
        kelasId: number;
        status: StatusAbsensi;
    }) => Promise<Absensi>;
    getTodayByUser: (userId: number) => Promise<Absensi[]>;
    getAllSantriAktif: () => Promise<{
        id: number;
        kelasId: number | null;
    }[]>;
    hasIzinToday: (userId: number) => Promise<boolean>;
    countSantriByKelas: (kelasId: number) => Promise<number>;
    getAbsensiByKelasAndMonth: (kelasId: number, start: Date, end: Date) => Promise<{
        id: number;
        userId: number;
        kelasId: number;
        tanggal: Date;
        status: import("../../dist/generated/index.js").$Enums.StatusAbsensi;
        createdAt: Date;
    }[]>;
    getByKelasAndTanggal: (kelasId: number, tanggal: Date) => Promise<({
        user: {
            name: string;
            id: number;
            kelasId: number | null;
            createdAt: Date;
            email: string;
            password: string | null;
            activationToken: string | null;
            activatedAt: Date | null;
            role: import("../../dist/generated/index.js").$Enums.Role;
            isActive: boolean;
            deletedAt: Date | null;
        };
    } & {
        id: number;
        userId: number;
        kelasId: number;
        tanggal: Date;
        status: import("../../dist/generated/index.js").$Enums.StatusAbsensi;
        createdAt: Date;
    })[]>;
    createManyPerHari: (kelasId: number, tanggal: Date, data: {
        userId: number;
        status: StatusAbsensi;
    }[]) => Promise<import("../../dist/generated/index.js").Prisma.BatchPayload>;
    deleteByKelasAndTanggal: (kelasId: number, tanggal: Date) => Promise<import("../../dist/generated/index.js").Prisma.BatchPayload>;
    getSantriByKelas: (kelasId: number) => Promise<{
        id: number;
    }[]>;
    exists: (userId: number, kelasId: number, tanggal: Date) => Promise<boolean>;
    createManual: (data: {
        userId: number;
        kelasId: number;
        status: StatusAbsensi;
        tanggal: Date;
    }) => Promise<{
        id: number;
        userId: number;
        kelasId: number;
        tanggal: Date;
        status: import("../../dist/generated/index.js").$Enums.StatusAbsensi;
        createdAt: Date;
    }>;
}
//# sourceMappingURL=absensi.repository.d.ts.map
