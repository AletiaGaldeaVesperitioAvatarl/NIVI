import { PrismaClient } from "../../../dist/generated/index.js";
export declare class DashboardRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getTotalSantriByPengajar(kelasIds: number[]): Promise<number>;
    getTotalKelasByPengajar(pengajarId: number): Promise<number>;
    getAbsensiHariIni(kelasIds: number[], date: Date): Promise<(import("../../../dist/generated/index.js").Prisma.PickEnumerable<import("../../../dist/generated/index.js").Prisma.AbsensiGroupByOutputType, "status"[]> & {
        _count: {
            _all: number;
        };
    })[]>;
    getTugasAktif(kelasIds: number[], today: Date): Promise<number>;
    getSubmissionMasuk(kelasIds: number[]): Promise<number>;
    getIzinPending(kelasIds: number[]): Promise<number>;
    getKelasIdsByPengajar(pengajarId: number): Promise<number[]>;
}
//# sourceMappingURL=p-dashboard.repository.d.ts.map
