import { Request, Response } from "express";
import { NilaiService } from "../service/nilai.service";
import { successResponse } from "../utils/response";

export class NilaiController {
  constructor(private service: NilaiService) {}

  getAll = async (_req: Request, res: Response) => {
    const data = await this.service.getAll();
    successResponse(res, "Semua nilai", data);
  };

  getBySubmission = async (req: Request, res: Response) => {
    const submissionId = Number(req.params.submissionId);
    const data = await this.service.getBySubmission(submissionId);
    successResponse(res, "Detail nilai", data);
  };

  create = async (req: Request, res: Response) => {
    const data = await this.service.create(req.body);
    successResponse(res, "Nilai berhasil disimpan", data, null, 201);
  };

  update = async (req: Request, res: Response) => {
    const submissionId = Number(req.params.submissionId);
    const data = await this.service.update(submissionId, req.body);
    successResponse(res, "Nilai berhasil diperbarui", data);
  };

  delete = async (req: Request, res: Response) => {
    const submissionId = Number(req.params.submissionId);
    await this.service.delete(submissionId);
    successResponse(res, "Nilai berhasil dihapus");
  };
}
