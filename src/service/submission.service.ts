import { SubmissionRepository } from "../repository/submission.repository";
import { Prisma, Submission } from "../../dist/generated";

export class SubmissionService {
  constructor(private repo: SubmissionRepository) {}

  /**
   * =========================
   * PENGAJAR
   * =========================
   * Ambil semua submission dari kelas yang dia ajar
   */
  async getForPengajar(pengajarId: number): Promise<Submission[]> {
    return this.repo.findForPengajar(pengajarId);
  }

  /**
   * =========================
   * SANTRI
   * =========================
   * Ambil submission milik santri sendiri
   */
  async getForSantri(userId: number): Promise<Submission[]> {
    return this.repo.findForSantri(userId);
  }

  /**
   * =========================
   * SANTRI SUBMIT TUGAS
   * =========================
   */
  async submitTugas(params: {
    userId: number;
    tugasId: number;
    fileUrl?: string;
    linkUrl?: string;
  }): Promise<Submission> {
    const { userId, tugasId, fileUrl, linkUrl } = params;

    const data: Prisma.SubmissionCreateInput = {
      user: {
        connect: { id: userId },
      },
      tugas: {
        connect: { id: tugasId },
      },
      fileUrl: fileUrl ?? null, // ⚠️ PENTING
      linkUrl: linkUrl ?? null, // ⚠️ PENTING
      status: "pending",
      submittedAt: new Date(),
    };

    return this.repo.create(data);
  }

  updateStatus = async (id: number, status: 'reviewed' | 'rejected') => {
  return this.repo.update(id, { status });
};

softDelete = async (id:number) =>{
  return this.repo.softDelete( id )
}

restore = async (id:number) =>{
  return this.repo.restore(id)
}

findArsipForPengajar = async (pengajarId:number) =>{
  return this.repo.findArsipForPengajar(pengajarId)
}
}
