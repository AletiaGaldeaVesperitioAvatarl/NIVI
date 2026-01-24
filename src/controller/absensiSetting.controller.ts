import { Request, Response } from "express";
import { AbsensiSettingService } from "../service/absensiSetting.service";
import { successResponse, errorResponse } from "../utils/response";
import { io } from "../socket"; // pastikan io di-export dari server.ts atau socket.ts

export class AbsensiSettingController {
  constructor(private service: AbsensiSettingService) {}

  getAll = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getAll();
      successResponse(res, "Semua setting absensi berhasil diambil", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getByKelas = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.kelasId);
      const data = await this.service.getByKelas(kelasId);
      successResponse(res, `Setting absensi kelas ${kelasId}`, data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  createOrUpdate = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.kelasId);
      const { maxAbsen } = req.body;
      if (!maxAbsen) return res.status(400).json({ message: "maxAbsen wajib diisi" });

      const data = await this.service.createOrUpdate(kelasId, Number(maxAbsen));

      // 🔔 Emit socket update ke semua client
      io.emit("absensi-setting-changed", { kelasId, maxAbsen: data.maxAbsen });

      successResponse(res, "Max absen berhasil disimpan", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  updateById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { maxAbsen } = req.body;
      if (!maxAbsen) return res.status(400).json({ message: "maxAbsen wajib diisi" });

      const data = await this.service.updateById(id, Number(maxAbsen));

      // 🔔 Emit socket update ke semua client
      io.emit("absensi-setting-changed", { kelasId: data.kelasId, maxAbsen: data.maxAbsen });

      successResponse(res, "Max absen berhasil diupdate", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };
}
