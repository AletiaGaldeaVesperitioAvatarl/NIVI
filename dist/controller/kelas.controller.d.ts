import { Request, Response } from "express";
import { KelasService } from "../service/kelas.service.js";
export declare class KelasController {
    private kelasService;
    constructor(kelasService: KelasService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=kelas.controller.d.ts.map
