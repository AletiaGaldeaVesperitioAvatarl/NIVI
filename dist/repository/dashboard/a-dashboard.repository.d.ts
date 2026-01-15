import { PrismaClient } from "../../../dist/generated/index.js";
export declare class AdminDashboardRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getTotalSantri(): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getTotalPengajar(): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getTotalAdmin(): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getTotalKelas(): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getAbsensiHariIni(today: Date): import("../../../dist/generated/index.js").Prisma.GetAbsensiGroupByPayload<{
        by: "status"[];
        where: {
            tanggal: {
                gte: Date;
                lte: Date;
            };
        };
        _count: {
            _all: true;
        };
    }>;
    getTugasAktif(today: Date): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getSubmissionMasukHariIni(today: Date): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
    getIzinPending(): import("../../../dist/generated/index.js").Prisma.PrismaPromise<number>;
}
//# sourceMappingURL=a-dashboard.repository.d.ts.map
