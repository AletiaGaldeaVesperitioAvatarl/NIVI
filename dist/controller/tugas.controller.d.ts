import { Request, Response } from "express";
import { TugasService } from "../service/tugas.service.js";
export declare class TugasController {
    private service;
    constructor(service: TugasService);
    getAll: (_: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    create: (req: any, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getForSantri: (req: any, res: Response) => Promise<void>;
}
//# sourceMappingURL=tugas.controller.d.ts.map
