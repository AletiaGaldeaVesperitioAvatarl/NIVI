import { Request, Response } from "express";
import { SubmissionService } from "../service/submission.service.js";
export declare class SubmissionController {
    private submissionService;
    constructor(submissionService: SubmissionService);
    submit: (req: Request, res: Response) => Promise<void>;
    getAll: (_req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
    getByUser: (req: Request, res: Response) => Promise<void>;
    getByTugas: (req: Request, res: Response) => Promise<void>;
    updateStatus: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=submission.route.d.ts.map
