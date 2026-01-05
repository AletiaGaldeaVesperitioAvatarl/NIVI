import { StatusSubmission, Submission } from "../../dist/generated/index.js";
import { SubmissionRepository } from "../repository/submission.repository.js";
export declare class SubmissionService {
    private submissionRepo;
    constructor(submissionRepo: SubmissionRepository);
    submit: (data: {
        tugasId: number;
        userId: number;
        fileUrl?: string;
        linkUrl?: string;
    }) => Promise<Submission>;
    getAll: () => Promise<Submission[]>;
    getById: (id: number) => Promise<Submission | null>;
    getByUser: (userId: number) => Promise<Submission[]>;
    getByTugas: (tugasId: number) => Promise<Submission[]>;
    updateStatus: (id: number, status: StatusSubmission) => Promise<Submission>;
    updateSubmission: (id: number, data: Partial<Submission>) => Promise<Submission>;
    delete: (id: number) => Promise<Submission>;
}
//# sourceMappingURL=submission.service.d.ts.map
