import { Request, Response } from "express";
import { NilaiService } from "../service/nilai.service.js";
export declare class NilaiController {
    private nilaiService;
    constructor(nilaiService: NilaiService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    getByUser: (req: Request, res: Response) => Promise<void>;
    getByTugas: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=nilai.controller.d.ts.map
