import { Request, Response } from "express";
import { MataPelajaranService } from "../service/mataPelajaran.service";
import { successResponse } from "../utils/response";

export class MataPelajaranController {
  constructor(private service: MataPelajaranService) {}

  // CREATE MAPEL
  create = async (req: Request, res: Response) => {
    const {nama, kode, kelasId, pengajarId} = req.body
    const data = await this.service.createMapel(nama, kode, kelasId, pengajarId);
    successResponse(res, "Mata pelajaran berhasil dibuat", data, null, 201);
  };

  // GET ALL
  getAll = async (_req: Request, res: Response) => {
    const data = await this.service.getAll();
    successResponse(res, "Semua mata pelajaran", data);
  };

  // GET BY KELAS
  getByKelas = async (req: Request, res: Response) => {
    const kelasId = Number(req.params.kelasId);
    const data = await this.service.getByKelas(kelasId);
    successResponse(res, "Mapel berdasarkan kelas", data);
  };

  // GET BY PENGAJAR
  getByPengajar = async (req: Request, res: Response) => {
    const pengajarId = Number(req.params.pengajarId);
    const data = await this.service.getByPengajar(pengajarId);
    successResponse(res, "Mapel berdasarkan pengajar", data);
  };

  // DELETE
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.service.delete(id);
    successResponse(res, "Mata pelajaran berhasil dihapus", data);
  };
}
