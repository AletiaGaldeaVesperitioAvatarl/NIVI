import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service.js";
export declare class AbsensiController {
    private absensiService;
    constructor(absensiService: AbsensiService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    getByUserId: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=absensi.controller.d.ts.map
