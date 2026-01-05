import { Request, Response } from "express";
import { AuthService } from "../service/auth.service.js";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map
