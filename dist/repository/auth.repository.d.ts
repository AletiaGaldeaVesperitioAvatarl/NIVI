import { PrismaClient, User, Role } from "../../dist/generated/index.js";
export declare class AuthRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getUserByEmail: (email: string) => Promise<User | null>;
    createUser: (data: {
        name: string;
        email: string;
        password: string;
        role: Role;
        kelasId?: number;
    }) => Promise<User>;
    verifyPassword: (plain: string, hashed: string) => Promise<boolean>;
    findByActivationToken: (token: string) => Promise<User | null>;
    activateUser: (id: number, hashedPassword: string) => Promise<{
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
//# sourceMappingURL=auth.repository.d.ts.map
