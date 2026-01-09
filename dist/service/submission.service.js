import { StatusSubmission } from "../../dist/generated/index.js";
export class SubmissionService {
    submissionRepo;
    constructor(submissionRepo) {
        this.submissionRepo = submissionRepo;
    }
    submit = async (data) => {
        return this.submissionRepo.create({
            ...data,
            status: StatusSubmission.submitted,
        });
    };
    // GET ALL
    getAll = async () => {
        return this.submissionRepo.findAll();
    };
    // GET BY ID
    getById = async (id) => {
        return this.submissionRepo.findById(id);
    };
    // GET BY USER
    getByUser = async (userId) => {
        return this.submissionRepo.findByUser(userId);
    };
    // GET BY TUGAS
    getByTugas = async (tugasId) => {
        return this.submissionRepo.findByTugas(tugasId);
    };
    // UPDATE STATUS (DINILAI / REVISI / DLL)
    updateStatus = async (id, status) => {
        return this.submissionRepo.update(id, { status });
    };
    // UPDATE FILE / LINK
    updateSubmission = async (id, data) => {
        return this.submissionRepo.update(id, data);
    };
    // DELETE
    delete = async (id) => {
        return this.submissionRepo.delete(id);
    };
}
//# sourceMappingURL=submission.service.js.map
