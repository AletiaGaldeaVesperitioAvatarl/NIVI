import { Request, Response } from "express";
import { NilaiService } from "../service/nilai.service";
import { successResponse, errorResponse } from "../utils/response";

export class NilaiController {
  constructor(private service: NilaiService) {}

  getAll = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getAll();
      successResponse(res, "Semua nilai", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getBySubmission = async (req: Request, res: Response) => {
    try {
      const submissionId = Number(req.params.submissionId);
      const data = await this.service.getBySubmission(submissionId);
      successResponse(res, "Detail nilai", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  create = async (req: Request, res: Response) => {
    try {
      const data = await this.service.create(req.body);

      successResponse(res, "Nilai berhasil disimpan", data, null, 201);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const submissionId = Number(req.params.submissionId);
      const data = await this.service.update(submissionId, req.body);

      // 🔥 REALTIME: emit ke room submission
      successResponse(res, "Nilai berhasil diperbarui", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const submissionId = Number(req.params.submissionId);
      await this.service.delete(submissionId);

      // 🔥 REALTIME: emit ke room submissio
      successResponse(res, "Nilai berhasil dihapus");
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };
}
