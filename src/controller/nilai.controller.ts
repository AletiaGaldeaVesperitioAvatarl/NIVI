import { Request, Response } from "express";
import { NilaiService } from "../service/nilai.service";
import { successResponse } from "../utils/response";

export class NilaiController {
  constructor(private nilaiService: NilaiService) {}

  // GET ALL NILAI
  getAll = async (_req: Request, res: Response) => {
    const data = await this.nilaiService.getAll();
    successResponse(res, "Berhasil ambil semua nilai", data);
  };

  // GET NILAI BY ID
  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.nilaiService.getById(id);
    successResponse(res, "Berhasil ambil nilai", data);
  };

  // GET NILAI BY USER
  getByUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const data = await this.nilaiService.getByUserId(userId);
    successResponse(res, "Berhasil ambil nilai user", data);
  };

  // GET NILAI BY TUGAS
  getByTugas = async (req: Request, res: Response) => {
    const tugasId = Number(req.params.tugasId);
    const data = await this.nilaiService.getByTugasId(tugasId);
    successResponse(res, "Berhasil ambil nilai tugas", data);
  };

  // CREATE NILAI
  create = async (req: Request, res: Response) => {
    const data = await this.nilaiService.createNilai(req.body);
    successResponse(res, "Nilai berhasil dibuat", data, null, 201);
  };

  // UPDATE NILAI
  update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.nilaiService.updateNilai(id, req.body);
    successResponse(res, "Nilai berhasil diupdate", data);
  };

  // DELETE NILAI
  delete = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await this.nilaiService.deleteNilai(id);
    successResponse(res, "Nilai berhasil dihapus", data);
  };
}
