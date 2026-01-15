import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service.js";
export declare class AbsensiController {
    private absensiService;
    constructor(absensiService: AbsensiService);
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    getByUserId: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    getMyTodayAbsensi: (req: Request, res: Response) => Promise<void>;
    absen: (req: Request, res: Response) => Promise<void>;
    autoAlpha: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    rekapBulananPerKelas: (req: Request, res: Response) => Promise<void>;
    getByKelasAndTanggal: (req: Request, res: Response) => Promise<void>;
    createAbsensiPerHari: (req: Request, res: Response) => Promise<void>;
    updateAbsensiPerTanggal: (req: Request, res: Response) => Promise<void>;
    deleteAbsensiPerHari: (req: Request, res: Response) => Promise<void>;
    generateBulanan: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=absensi.controller.d.ts.map
