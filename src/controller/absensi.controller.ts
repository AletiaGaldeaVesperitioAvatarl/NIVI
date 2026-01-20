import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";
import { StatusAbsensi } from "../../dist/generated";
import { successResponse, errorResponse } from "../utils/response";

export class AbsensiController {
  constructor(private service: AbsensiService) {}

  // Tambahkan di AbsensiController.ts
  getAll = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getAll();
      successResponse(res, "Semua absensi", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getByUserId = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const data = await this.service.getByUserId(userId);
      successResponse(res, `Absensi user ${userId}`, data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  absen = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.user!.id);
      const kelasId = req.user!.kelasId;
      const { status, jadwalId } = req.body;

      if (!kelasId) throw new Error("User belum punya kelas");
      if (!Object.values(StatusAbsensi).includes(status as StatusAbsensi)) {
        throw new Error("Status tidak valid");
      }

      const data = await this.service.absenHadir(
        userId,
        kelasId,
        status as StatusAbsensi,
        jadwalId,
      );
      successResponse(res, "Absen berhasil", data, null, 201);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getMyTodayAbsensi = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.user!.id);
      const data = await this.service.getTodayByUser(userId);
      successResponse(res, "Absensi hari ini", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;
      const data = await this.service.updateAbsensi(id, {
        status: status as StatusAbsensi,
      });
      successResponse(res, "Absensi diperbarui", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await this.service.deleteAbsensi(id);
      successResponse(res, "Absensi dihapus", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };
}
