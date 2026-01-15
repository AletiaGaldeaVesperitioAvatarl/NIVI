import { AuthRepository } from "../repository/auth.repository.js";
export declare class AuthService {
    private authRepository;
    constructor(authRepository: AuthRepository);
    login: (email: string, password: string) => Promise<{
        status: string;
        token: string | null;
        user?: never;
    } | {
        status: string;
        token: string;
        user: {
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
        };
    }>;
    requestActivation: (email: string) => Promise<{
        email: string;
        token: string | null;
    }>;
    activateAccount: (token: string, password: string) => Promise<{
        message: string;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
