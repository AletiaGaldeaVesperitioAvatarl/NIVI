import { Request, Response } from "express";
import { MataPelajaranService } from "../service/mataPelajaran.service";
import { successResponse } from "../utils/response";

export class MataPelajaranController {
  constructor(private service: MataPelajaranService) {}

  // GET ALL
  getAll = async (_: Request, res: Response) => {
    const data = await this.service.getAll();
    successResponse(res, "Semua mata pelajaran", data);
  };

  // GET BY ID
  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.service.getById(id);
    successResponse(res, "Detail mata pelajaran", data);
  };

  // CREATE
  create = async (req: Request, res: Response) => {
    const { nama, kode } = req.body;

    const data = await this.service.create({ nama, kode });

    successResponse(res, "Mata pelajaran berhasil dibuat", data, null, 201);
  };

  // UPDATE
  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.service.update(id, req.body);
    successResponse(res, "Mata pelajaran berhasil diperbarui", data);
  };

  // DELETE
delete = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await this.service.delete(id);

    successResponse(res, "Mata pelajaran berhasil dihapus", data);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Gagal menghapus mata pelajaran",
    });
  }
};

}
