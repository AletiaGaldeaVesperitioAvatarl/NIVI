import { Request, Response } from "express";
import { IzinService } from "../service/izin.service";
import { successResponse } from "../utils/response";

export class IzinController {
  constructor(private izinService: IzinService) {}

  // GET ALL IZIN
  getAll = async (_req: Request, res: Response) => {
    const data = await this.izinService.getAll();
    successResponse(res, "Berhasil ambil semua izin", data);
  };

  // GET IZIN BY ID
  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.izinService.getById(id);
    successResponse(res, "Berhasil ambil izin", data);
  };

  // GET IZIN BY USER
  getByUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const data = await this.izinService.getByUserId(userId);
    successResponse(res, "Berhasil ambil izin user", data);
  };

  // CREATE IZIN
  create = async (req: Request, res: Response) => {
    const data = await this.izinService.createIzin(req.body);
    successResponse(res, "Izin berhasil dibuat", data, null, 201);
  };

  // UPDATE IZIN
  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.izinService.updateIzin(id, req.body);
    successResponse(res, "Izin berhasil diupdate", data);
  };

  // DELETE IZIN
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.izinService.deleteIzin(id);
    successResponse(res, "Izin berhasil dihapus", data);
  };
}
