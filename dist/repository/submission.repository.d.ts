import { PrismaClient, Submission, StatusSubmission } from "../../dist/generated/index.js";
export declare class SubmissionRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: {
        tugasId: number;
        userId: number;
        fileUrl?: string;
        linkUrl?: string;
        status: StatusSubmission;
    }): Promise<Submission>;
    findAll(): Promise<Submission[]>;
    findById(id: number): Promise<Submission | null>;
    findByUser(userId: number): Promise<Submission[]>;
    findByTugas(tugasId: number): Promise<Submission[]>;
    update(id: number, data: Partial<Submission>): Promise<Submission>;
    delete(id: number): Promise<Submission>;
}
//# sourceMappingURL=submission.repository.d.ts.map
