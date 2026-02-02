export class NilaiService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    getAll() {
        return this.repo.findAll();
    }
    getBySubmission(submissionId) {
        return this.repo.findBySubmissionId(submissionId);
    }
    create(payload) {
        const { submissionId, nilai, catatan } = payload;
        return this.repo.create({
            nilai,
            catatan: catatan ?? null,
            submission: {
                connect: { id: submissionId },
            },
        });
    }
    update(submissionId, payload) {
        return this.repo.update(submissionId, {
            nilai: payload.nilai,
            catatan: payload.catatan ?? null,
        });
    }
    delete(submissionId) {
        return this.repo.delete(submissionId);
    }
}
//# sourceMappingURL=nilai.service.js.map