import { Request, Response } from "express";
import { IzinService } from "../service/izin.service.js";
export declare class IzinController {
    private izinService;
    constructor(izinService: IzinService);
    getMyIzin: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    getByUser: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=izin.controller.d.ts.map
