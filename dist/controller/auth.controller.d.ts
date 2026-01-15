import type { Request, Response } from "express";
import { AuthService } from "../service/auth.service.js";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    requestActivation: (req: Request, res: Response) => Promise<void>;
    activateAccount: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=auth.controller.d.ts.map
