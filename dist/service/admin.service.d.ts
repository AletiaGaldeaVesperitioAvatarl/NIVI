import { AdminRepository } from "../repository/admin.repository.js";
import { Role } from "../../dist/generated/index.js";
export declare class AdminService {
    private repo;
    constructor(repo: AdminRepository);
    createSantriByAdmin: (data: {
        name: string;
        email: string;
        kelasId: number;
    }) => Promise<{
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
    }>;
    activate: (token: string, password: string) => Promise<{
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
    }>;
    assign(kelasId: number, pengajarId: number): Promise<{
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }>;
    remove(kelasId: number, pengajarId: number): Promise<{
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }>;
    listPengajar(kelasId: number): Promise<{
        id: number;
        pengajar: {
            name: string;
            id: number;
            email: string;
        }[];
        namaKelas: string;
    } | null>;
    createPengajarByAdmin: (data: {
        name: string;
        email: string;
    }) => Promise<{
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
    }>;
    createUser: (data: {
        name: string;
        email: string;
        role: Role;
        kelasId?: number;
    }) => Promise<{
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
    }>;
}
//# sourceMappingURL=admin.service.d.ts.map
