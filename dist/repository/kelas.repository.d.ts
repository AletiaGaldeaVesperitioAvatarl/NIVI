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
    assignPengajar: (kelasId: number, pengajarId: number) => Promise<{
        pengajar: {
            name: string;
            id: number;
            kelasId: number | null;
            createdAt: Date;
            email: string;
            password: string;
            role: import("../../dist/generated/index.js").$Enums.Role;
            isActive: boolean;
            deletedAt: Date | null;
        }[];
        santri: {
            name: string;
            id: number;
            kelasId: number | null;
            createdAt: Date;
            email: string;
            password: string;
            role: import("../../dist/generated/index.js").$Enums.Role;
            isActive: boolean;
            deletedAt: Date | null;
        }[];
    } & {
        id: number;
        namaKelas: string;
    }>;
}
//# sourceMappingURL=kelas.repository.d.ts.map
