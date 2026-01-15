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
    autoAlpha: () => Promise<number>;
    rekapBulananPerKelas: (kelasId: number, bulan: string) => Promise<{
        kelasId: number;
        bulan: string;
        totalSantri: number;
        hadir: number;
        izin: number;
        alpha: number;
        persentaseHadir: number;
    }>;
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
    createAbsensiPerHari: (kelasId: number, tanggal: Date, data: {
        userId: number;
        status: StatusAbsensi;
    }[]) => Promise<import("../../dist/generated/index.js").Prisma.BatchPayload>;
    deleteByKelasAndTanggal: (kelasId: number, tanggal: Date) => Promise<import("../../dist/generated/index.js").Prisma.BatchPayload>;
    generateAbsensiBulanan: (kelasId: number, bulan: string) => Promise<{
        total: number;
    }>;
}
//# sourceMappingURL=absensi.service.d.ts.map
