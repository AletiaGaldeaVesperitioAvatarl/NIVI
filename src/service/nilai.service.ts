import { NilaiRepository } from "../repository/nilai.repository";

export class NilaiService {
  constructor(private repo: NilaiRepository) {}

  getAll() {
    return this.repo.findAll();
  }

  getBySubmission(submissionId: number) {
    return this.repo.findBySubmissionId(submissionId);
  }

  create(payload: {
    submissionId: number;
    nilai: number;
    catatan?: string;
  }) {
    const { submissionId, nilai, catatan } = payload;

    return this.repo.create({
      nilai,
      catatan: catatan ?? null,
      submission: {
        connect: { id: submissionId },
      },
    });
  }

  update(
    submissionId: number,
    payload: { nilai: number; catatan?: string }
  ) {
    return this.repo.update(submissionId, {
      nilai: payload.nilai,
      catatan: payload.catatan ?? null,
    });
  }

  delete(submissionId: number) {
    return this.repo.delete(submissionId);
  }
}
