import { PrismaClient } from "../../dist/generated/index.js";
export declare class TugasRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getAll: () => Promise<({
        kelas: {
            id: number;
            namaKelas: string;
            deskripsi: string | null;
        };
        mataPelajaran: {
            id: number;
            createdAt: Date;
            nama: string;
            kode: string;
        };
        creator: {
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
        kelasId: number;
        createdAt: Date;
        mataPelajaranId: number;
        title: string;
        description: string | null;
        deadline: Date;
        createdBy: number;
    })[]>;
    getById: (id: number) => Promise<({
        kelas: {
            id: number;
            namaKelas: string;
            deskripsi: string | null;
        };
        submission: {
            id: number;
            userId: number;
            status: import("../../dist/generated/index.js").$Enums.StatusSubmission;
            tugasId: number;
            fileUrl: string | null;
            linkUrl: string | null;
            submittedAt: Date;
        }[];
        nilai: {
            id: number;
            userId: number;
            createdAt: Date;
            tugasId: number;
            nilai: number;
            catatan: string | null;
        }[];
        mataPelajaran: {
            id: number;
            createdAt: Date;
            nama: string;
            kode: string;
        };
        creator: {
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
        kelasId: number;
        createdAt: Date;
        mataPelajaranId: number;
        title: string;
        description: string | null;
        deadline: Date;
        createdBy: number;
    }) | null>;
    create: (data: {
        kelasId: number;
        mataPelajaranId: number;
        title: string;
        description?: string;
        deadline: Date;
        createdBy: number;
    }) => Promise<{
        id: number;
        kelasId: number;
        createdAt: Date;
        mataPelajaranId: number;
        title: string;
        description: string | null;
        deadline: Date;
        createdBy: number;
    }>;
    update: (id: number, data: {
        title?: string;
        description?: string;
        deadline?: Date;
        mataPelajaranId?: number;
    }) => Promise<{
        id: number;
        kelasId: number;
        createdAt: Date;
        mataPelajaranId: number;
        title: string;
        description: string | null;
        deadline: Date;
        createdBy: number;
    }>;
    delete: (id: number) => Promise<{
        id: number;
        kelasId: number;
        createdAt: Date;
        mataPelajaranId: number;
        title: string;
        description: string | null;
        deadline: Date;
        createdBy: number;
    }>;
    getForSantri: (userId: number) => Promise<{
        id: number;
        title: string;
        description: string | null;
        deadline: Date;
        mataPelajaran: string;
        status: string;
        submittedAt: Date | null;
        link: string | null;
    }[]>;
}
//# sourceMappingURL=tugas.repository.d.ts.map
