import { Kelas } from "../../dist/generated/index.js";
import { KelasRepository } from "../repository/kelas.repository.js";
export declare class KelasService {
    private kelasRepository;
    constructor(kelasRepository: KelasRepository);
    getAll: () => Promise<Kelas[]>;
    getById: (id: number) => Promise<Kelas | null>;
    createKelas: (data: {
        namaKelas: string;
        deskripsi?: string;
    }) => Promise<Kelas>;
    updateKelas: (id: number, data: Partial<Kelas>) => Promise<Kelas>;
    deleteKelas: (id: number) => Promise<Kelas>;
    assignPengajarKeKelas: (kelasId: number, pengajarId: number) => Promise<{
        pengajar: {
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
        }[];
        santri: {
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
        }[];
    } & {
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }>;
    setPengajarKelas: (kelasId: number, pengajarIds: number[]) => Promise<{
        pengajar: {
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
        }[];
        santri: {
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
        }[];
    } & {
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }>;
}
//# sourceMappingURL=kelas.service.d.ts.map
