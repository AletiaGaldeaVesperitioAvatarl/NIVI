import { Request, Response } from "express";
import { SubmissionService } from "../service/submission.service";
import { successResponse } from "../utils/response";
import { StatusSubmission } from "../../dist/generated";

export class SubmissionController {
  constructor(private submissionService: SubmissionService) {}

  // SUBMIT TUGAS
  submit = async (req: Request, res: Response) => {
    const { tugasId, fileUrl, linkUrl } = req.body;
    const userId = req.user!.id;

    const result = await this.submissionService.submit({
      tugasId: Number(tugasId),
      userId:  Number(userId),
      fileUrl,
      linkUrl,
    });

    successResponse(res, "Tugas berhasil dikumpulkan", result, null, 201);
  };

  // GET ALL SUBMISSION
  getAll = async (_req: Request, res: Response) => {
    const result = await this.submissionService.getAll();
    successResponse(res, "Semua submission berhasil diambil", result);
  };

  // GET SUBMISSION BY ID
  getById = async (req: Request, res: Response) => {
    const result = await this.submissionService.getById(
      Number(req.params.id)
    );
    successResponse(res, "Submission ditemukan", result);
  };

  // GET SUBMISSION BY USER
  getByUser = async (req: Request, res: Response) => {
    const result = await this.submissionService.getByUser(
      Number(req.params.userId)
    );
    successResponse(res, "Submission user berhasil diambil", result);
  };

  // GET SUBMISSION BY TUGAS
  getByTugas = async (req: Request, res: Response) => {
    const result = await this.submissionService.getByTugas(
      Number(req.params.tugasId)
    );
    successResponse(res, "Submission tugas berhasil diambil", result);
  };

  // UPDATE STATUS
  updateStatus = async (req: Request, res: Response) => {
    const { status } = req.body;

    const result = await this.submissionService.updateStatus(
      Number(req.params.id),
      status as StatusSubmission
    );

    successResponse(res, "Status submission berhasil diubah", result);
  };

  // DELETE SUBMISSION
  delete = async (req: Request, res: Response) => {
    const result = await this.submissionService.delete(
      Number(req.params.id)
    );
    successResponse(res, "Submission berhasil dihapus", result);
  };
}
