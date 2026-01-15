import { PrismaClient, Role, User } from "../../dist/generated/index.js";
export declare class AdminRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    createSantriByAdmin: (data: {
        name: string;
        email: string;
        kelasId: number;
        activationToken: string;
    }) => Promise<User>;
    findByActivationToken: (token: string) => Promise<{
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
    } | null>;
    activate: (id: number, hashedPassword: string) => Promise<{
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
    assignPengajar(kelasId: number, pengajarId: number): import("../../dist/generated/index.js").Prisma.Prisma__KelasClient<{
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }, never, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
    removePengajar(kelasId: number, pengajarId: number): import("../../dist/generated/index.js").Prisma.Prisma__KelasClient<{
        id: number;
        namaKelas: string;
        deskripsi: string | null;
    }, never, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
    getPengajarByKelas(kelasId: number): import("../../dist/generated/index.js").Prisma.Prisma__KelasClient<{
        id: number;
        pengajar: {
            name: string;
            id: number;
            email: string;
        }[];
        namaKelas: string;
    } | null, null, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
    createPengajarByAdmin: (data: {
        name: string;
        email: string;
        activationToken: string;
    }) => Promise<User>;
    createUserByAdmin(data: {
        name: string;
        email: string;
        role: Role;
        kelasId?: number;
        activationToken: string;
    }): import("../../dist/generated/index.js").Prisma.Prisma__UserClient<{
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
    }, never, import("../../dist/generated/runtime/client.js").DefaultArgs, import("../../dist/generated/index.js").Prisma.PrismaClientOptions>;
}
//# sourceMappingURL=admin.repository.d.ts.map
