import { NilaiRepository } from "../repository/nilai.repository.js";
export declare class NilaiService {
    private repo;
    constructor(repo: NilaiRepository);
    getAll(): import("../../dist/generated/index.js").Prisma.PrismaPromise<({
        submission: {
            user: {
                name: string | null;
                id: number;
                kelasId: number | null;
                createdAt: Date;
                email: string;
                password: string | null;
                activatedAt: Date | null;
                isActive: boolean;
                otp: string | null;
                otpExpiresAt: Date | null;
                role: import("../../dist/generated/index.js").$Enums.Role;
                deletedAt: Date | null;
            };
            tugas: {
                id: number;
                kelasId: number;
                createdAt: Date;
                deletedAt: Date | null;
                mataPelajaranId: number;
                title: string;
                description: string | null;
                deadline: Date;
                createdBy: number;
            };
        } & {
            id: number;
            userId: number;
            status: import("../../dist/generated/index.js").$Enums.StatusSubmission;
            deletedAt: Date | null;
            tugasId: number;
            fileUrl: string | null;
            linkUrl: string | null;
            submittedAt: Date;
        };
    } & {
        id: number;
        createdAt: Date;
        nilai: number;
        submissionId: number;
        catatan: string | null;
    })[]>;
    getBySubmission(submissionId: number): import("../../dist/generated/index.js").Prisma.Prisma__NilaiClient<{
        id: number;
        createdAt: Date;
        nilai: number;
        submissionId: number;
        catatan: string | null;
    } | null, null, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
    create(payload: {
        submissionId: number;
        nilai: number;
        catatan?: string;
    }): Promise<{
        id: number;
        createdAt: Date;
        nilai: number;
        submissionId: number;
        catatan: string | null;
    }>;
    update(submissionId: number, payload: {
        nilai: number;
        catatan?: string;
    }): import("../../dist/generated/index.js").Prisma.Prisma__NilaiClient<{
        id: number;
        createdAt: Date;
        nilai: number;
        submissionId: number;
        catatan: string | null;
    }, never, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
    delete(submissionId: number): import("../../dist/generated/index.js").Prisma.Prisma__NilaiClient<{
        id: number;
        createdAt: Date;
        nilai: number;
        submissionId: number;
        catatan: string | null;
    }, never, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=nilai.service.d.ts.map
