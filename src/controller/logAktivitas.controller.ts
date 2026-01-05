import { Request, Response } from "express";
import { LogAktivitasService } from "../service/logaktivitas.service";
import { successResponse } from "../utils/response";

export class LogAktivitasController {
  constructor(private logService: LogAktivitasService) {}

  // GET ALL LOG
  getAll = async (_req: Request, res: Response) => {
    const logs = await this.logService.getAllLogs();
    successResponse(res, "Berhasil ambil semua log aktivitas", logs);
  };

  // GET LOG BY USER ID
  getByUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    if (!userId) {
      throw new Error("userId tidak valid");
    }

    const logs = await this.logService.getLogsByUser(userId);
    successResponse(res, "Berhasil ambil log user", logs);
  };

  // CREATE LOG (OPSIONAL, KALO MAU MANUAL)
  create = async (req: Request, res: Response) => {
    const { userId, aktivitas } = req.body;

    if (!userId || !aktivitas) {
      throw new Error("userId dan aktivitas wajib diisi");
    }

    const log = await this.logService.createLog(userId, aktivitas);
    successResponse(res, "Log aktivitas berhasil dibuat", log, null, 201);
  };

  // DELETE LOG (ADMIN)
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!id) {
      throw new Error("id tidak valid");
    }

    const log = await this.logService.deleteLog(id);
    successResponse(res, "Log aktivitas berhasil dihapus", log);
  };
}
