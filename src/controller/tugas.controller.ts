import { Request, Response } from "express";
import { TugasService } from "../service/tugas.service";
import { successResponse } from "../utils/response";

export class TugasController {
  constructor(private service: TugasService) {}

  getAll = async (_: Request, res: Response) => {
    const data = await this.service.getAll();
    successResponse(res, "Semua tugas", data);
  };

getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID tidak valid' });
  }

  const data = await this.service.getById(id);
  successResponse(res, "Detail tugas", data);
};


create = async (req: any, res: Response) => {
  const {
    kelasId,
    mataPelajaranId,
    mapelId,
    title,
    description,
    deadline,
  } = req.body;

  const data = await this.service.create({
    kelasId: Number(kelasId),
    mataPelajaranId: Number(mataPelajaranId ?? mapelId),
    title,
    description,
    deadline: new Date(deadline),
    createdBy: req.user.id,
  });

  successResponse(res, "Tugas berhasil dibuat", data, null, 201);
};


  update = async (req: Request, res: Response) => {
    const data = await this.service.update(
      Number(req.params.id),
      req.body
    );
    successResponse(res, "Tugas berhasil diperbarui", data);
  };

  delete = async (req: Request, res: Response) => {
    const data = await this.service.delete(Number(req.params.id));
    successResponse(res, "Tugas berhasil dihapus", data);
  };

  getForSantri = async (req: any, res: Response) => {
    const data = await this.service.getForSantri(req.user.id);

    successResponse(res, "Tugas santri", data);
  };
}
