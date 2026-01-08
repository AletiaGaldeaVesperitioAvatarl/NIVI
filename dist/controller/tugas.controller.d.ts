import { Request, Response } from "express";
import { TugasService } from "../service/tugas.service.js";
export declare class TugasController {
    private tugasService;
    constructor(tugasService: TugasService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getForSantri: (req: any, res: Response) => Promise<void>;
}
//# sourceMappingURL=tugas.controller.d.ts.map
