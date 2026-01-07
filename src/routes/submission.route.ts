import { Router } from "express";

import { SubmissionRepository } from "../repository/submission.repository";
import { SubmissionService } from "../service/submission.service";
import { SubmissionController } from "../controller/submission.controller";
import prismaInstance from "../database";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

/**
 * DEPENDENCY INJECTION
 */
const submissionRepository = new SubmissionRepository(prismaInstance);
const submissionService = new SubmissionService(submissionRepository);
const submissionController = new SubmissionController(submissionService);

/**
 * ROUTES
 */
router.post("/", authenticate, submissionController.submit);
router.get("/", authenticate, submissionController.getAll);
router.get("/:id", authenticate, submissionController.getById);
router.get("/user/:userId", authenticate, submissionController.getByUser);
router.get("/tugas/:tugasId", authenticate, submissionController.getByTugas);
router.patch("/:id/status", authenticate, submissionController.updateStatus);
router.delete("/:id", authenticate, submissionController.delete);

export default router;
