import { Request, Response } from "express";
import { JadwalAbsensiService } from "../service/jadwalAbsensi.service";
import { successResponse, errorResponse } from "../utils/response";

export class JadwalAbsensiController {
  constructor(private service: JadwalAbsensiService) {}

  create = async (req: Request, res: Response) => {
    try {
      const jadwal = await this.service.createJadwal(req.body);
      successResponse(res, "Jadwal berhasil dibuat", jadwal, null, 201);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  createBulk = async (req: Request, res: Response) => {
    try {
      const { kelasId, jamMulai, jamSelesai, tanggalMulai, tanggalSelesai } = req.body;
      const result = await this.service.createBulkJadwal(
        kelasId,
        jamMulai,
        jamSelesai,
        new Date(tanggalMulai),
        new Date(tanggalSelesai)
      );
      successResponse(res, "Jadwal bulk berhasil dibuat", result, null, 201);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

getAllByKelas = async (req: Request, res: Response) => {
  try {
    const kelasId = Number(req.params.kelasId);
    const month = req.query.month ? Number(req.query.month) : undefined; // 1-12
    const year = req.query.year ? Number(req.query.year) : undefined;

    const jadwal = await this.service.getAllByKelas(kelasId, month, year);
    successResponse(res, "Jadwal berhasil diambil", jadwal);
  } catch (err: any) {
    errorResponse(res, err.message);
  }
};


  getById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const jadwal = await this.service.getById(id);
      if (!jadwal) throw new Error("Jadwal tidak ditemukan");
      successResponse(res, "Jadwal berhasil diambil", jadwal);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const jadwal = await this.service.updateJadwal(id, req.body);
      successResponse(res, "Jadwal berhasil diperbarui", jadwal);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.service.deleteJadwal(id);
      successResponse(res, "Jadwal berhasil dihapus", null);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };
}
