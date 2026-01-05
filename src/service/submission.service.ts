import { StatusSubmission, Submission } from "../generated/client";
import { SubmissionRepository } from "../repository/submission.repository";

export class SubmissionService {
  constructor(private submissionRepo: SubmissionRepository) {}

  // SUBMIT TUGAS
  submit = async (data: {
    tugasId: number;
    userId: number;
    fileUrl?: string;
    linkUrl?: string;
  }): Promise<Submission> => {
    return this.submissionRepo.create({
      ...data,
      status: StatusSubmission.tepat_waktu,
    });
  };

  // GET ALL
  getAll = async (): Promise<Submission[]> => {
    return this.submissionRepo.findAll();
  };

  // GET BY ID
  getById = async (id: number): Promise<Submission | null> => {
    return this.submissionRepo.findById(id);
  };

  // GET BY USER
  getByUser = async (userId: number): Promise<Submission[]> => {
    return this.submissionRepo.findByUser(userId);
  };

  // GET BY TUGAS
  getByTugas = async (tugasId: number): Promise<Submission[]> => {
    return this.submissionRepo.findByTugas(tugasId);
  };

  // UPDATE STATUS (DINILAI / REVISI / DLL)
  updateStatus = async (
    id: number,
    status: StatusSubmission
  ): Promise<Submission> => {
    return this.submissionRepo.update(id, { status });
  };

  // UPDATE FILE / LINK
  updateSubmission = async (
    id: number,
    data: Partial<Submission>
  ): Promise<Submission> => {
    return this.submissionRepo.update(id, data);
  };

  // DELETE
  delete = async (id: number): Promise<Submission> => {
    return this.submissionRepo.delete(id);
  };
}
