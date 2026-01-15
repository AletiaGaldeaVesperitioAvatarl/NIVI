import { PrismaClient, Role, User } from "../../dist/generated/index.js";
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    create(data: {
        name: string;
        email: string;
        password: string;
        role: Role;
        kelasId?: number;
    }): Promise<User>;
    update(id: number, data: Partial<User>): Promise<User>;
    deactivate(id: number): Promise<User>;
    getStats(): Promise<import("../../dist/generated/index.js").Prisma.GetUserAggregateType<{
        _count: {
            id: true;
        };
    }>>;
    getSantri(): Promise<{
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
    }[]>;
    getPengajar(): Promise<{
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
    }[]>;
    isAdminExist(): Promise<boolean>;
}
//# sourceMappingURL=user.repository.d.ts.map
