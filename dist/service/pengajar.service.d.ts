import { PengajarRepository } from "../repository/pengajar.repository.js";
export declare class PengajarService {
    private prisma;
    constructor(prisma: PengajarRepository);
    createPengajar: (data: {
        name: string;
        email: string;
        password: string;
    }) => Promise<{
        name: string;
        id: number;
        kelasId: number | null;
        createdAt: Date;
        email: string;
        password: string;
        role: import("../../dist/generated/index.js").$Enums.Role;
        isActive: boolean;
        deletedAt: Date | null;
    }>;
}
//# sourceMappingURL=pengajar.service.d.ts.map
