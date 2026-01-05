import { AuthRepository } from "../repository/auth.repository.js";
import { User, Role } from "../generated/client.js";
export declare class AuthService {
    private authRepository;
    constructor(authRepository: AuthRepository);
    register: (data: {
        name: string;
        email: string;
        password: string;
        role: Role;
        kelasId?: number;
    }) => Promise<User>;
    login: (email: string, password: string) => Promise<{
        token: string;
        user: User;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map
