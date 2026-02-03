import { PrismaClient, User } from "../../dist/generated/index.js";
export declare class PengajarRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    getUserByEmail: (email: string) => Promise<User | null>;
    createUser: (data: {
        name: string;
        email: string;
        password: string;
    }) => Promise<User>;
    hashPassword: (password: string) => Promise<string>;
}
//# sourceMappingURL=pengajar.repository.d.ts.map
