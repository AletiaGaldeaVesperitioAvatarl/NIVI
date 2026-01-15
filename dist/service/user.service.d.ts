import { Role, User } from "../../dist/generated/index.js";
import { UserRepository } from "../repository/user.repository.js";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    getAll: () => Promise<User[]>;
    getById: (id: number) => Promise<User | null>;
    getByEmail: (email: string) => Promise<User | null>;
    createUser: (data: {
        name: string;
        email: string;
        password: string;
        role: Role;
        kelasId?: number;
    }) => Promise<User>;
    updateUser: (id: number, data: Partial<User>) => Promise<User>;
    deactivateUser: (id: number) => Promise<User>;
    getStats: () => Promise<import("../../dist/generated/index.js").Prisma.GetUserAggregateType<{
        _count: {
            id: true;
        };
    }>>;
    getSantri: () => Promise<{
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
    getPengajar: () => Promise<{
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
    createAdmin: (data: {
        name: string;
        email: string;
        password: string;
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
//# sourceMappingURL=user.service.d.ts.map
