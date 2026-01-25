import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";
import { StatusAbsensi } from "../../dist/generated";
import { successResponse, errorResponse } from "../utils/response";
import { io } from "../socket";
import { UserService } from "../service/user.service";

export class AbsensiController {
  constructor(
    private service: AbsensiService,
    private userService: UserService,
  ) {}

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
      const { status, jadwalId } = req.body;

      if (!Object.values(StatusAbsensi).includes(status as StatusAbsensi)) {
        throw new Error("Status tidak valid");
      }

      // 🔥 AMBIL USER + KELAS DARI DB
      const user = await this.userService.getById(userId);
      if (!user?.kelasId) {
        throw new Error("User belum punya kelas");
      }

      const kelasId = user.kelasId;

      const data = await this.service.absenHadir(
        userId,
        kelasId,
        status as StatusAbsensi,
        jadwalId,
      );

      // 🔥 REALTIME UPDATE
      const realtimeData = await this.service.getByKelas({
        kelasId,
        page: 1,
        limit: 100,
        sort: "desc",
      });

      io.to(`kelas-${kelasId}`).emit("absensi-update", realtimeData.data);

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

  getByKelas = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.kelasId);
      const page = Number(req.query.page ?? 1);
      const limit = Number(req.query.limit ?? 20);
      const sort = req.query.sort === "asc" ? "asc" : "desc";

      const result = await this.service.getByKelas({
        kelasId,
        page,
        limit,
        sort,
      });

      res.json({
        success: true,
        ...result,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
}
