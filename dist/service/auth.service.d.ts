import { AuthRepository } from "../repository/auth.repository.js";
import { User } from "../../dist/generated/index.js";
export declare class AuthService {
    private authRepository;
    constructor(authRepository: AuthRepository);
    register: (data: {
        name: string;
        email: string;
        password: string;
        kelasId?: number;
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
    login: (email: string, password: string) => Promise<{
        token: string;
        user: User;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
