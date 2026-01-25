import type { Request, Response } from "express";
import { SubmissionService } from "../service/submission.service";
import { successResponse } from "../utils/response";

export class SubmissionController {
  constructor(private service: SubmissionService) {}

  /**
   * =========================
   * PENGAJAR
   * =========================
   * Melihat submission dari kelas yang dia ajar
   */
  getForPengajar = async (req: Request, res: Response) => {

    if (!req.user) {
      throw new Error ("User tidak ditemukan!")
    }
    const pengajarId = req.user.id;

    const data = await this.service.getForPengajar(pengajarId);

    successResponse(res, "Submission kelas yang anda ajar", data);
  };

  /**
   * =========================
   * SANTRI
   * =========================
   * Melihat submission milik sendiri
   */
  getForSantri = async (req: any, res: Response) => {
    const userId = req.user.id;

    const data = await this.service.getForSantri(userId);

    successResponse(res, "Submission saya", data);
  };

  /**
   * =========================
   * SANTRI
   * =========================
   * Submit tugas
   */
  submit = async (req: any, res: Response) => {
    const { tugasId, fileUrl, linkUrl } = req.body;

    if (!tugasId) {
      return res.status(400).json({
        message: "tugasId wajib diisi",
      });
    }

    const data = await this.service.submitTugas({
      userId: req.user.id,
      tugasId: Number(tugasId),
      fileUrl,
      linkUrl,
    });

    successResponse(res, "Tugas berhasil dikumpulkan", data, null, 201);
  };

  updateStatus = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'reviewed' | 'rejected'

    // Validasi status
    if (!['reviewed', 'rejected'].includes(status)) {
      return res.status(400).json({ message: "Status tidak valid" });
    }

    const updated = await this.service.updateStatus(+id, status);
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Gagal update status" });
  }
};

}
