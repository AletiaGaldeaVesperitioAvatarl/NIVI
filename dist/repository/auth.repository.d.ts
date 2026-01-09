import { PrismaClient, Role, User } from "../../dist/generated/index.js";
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
    verifyPassword: (plainPassword: string, hashedPassword: string) => Promise<boolean>;
}
//# sourceMappingURL=auth.repository.d.ts.map
