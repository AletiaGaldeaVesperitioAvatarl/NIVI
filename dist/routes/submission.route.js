import { Router } from "express";
import { SubmissionRepository } from "../repository/submission.repository.js";
import { SubmissionService } from "../service/submission.service.js";
import { SubmissionController } from "../controller/submission.controller.js";
import prismaInstance from "../database.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { TugasRepository } from "../repository/tugas.repository.js";
import { TugasService } from "../service/tugas.service.js";
const router = Router();
// === Dependency Injection ===
const repository = new SubmissionRepository(prismaInstance);
const tugasRepo = new TugasRepository(prismaInstance);
const service = new SubmissionService(repository);
const tugasService = new TugasService(tugasRepo);
const controller = new SubmissionController(service, tugasService);
/**
 * =========================
 * SANTRI
 * =========================
 */
router.get("/tugas/arsip", authenticate, controller.findArsipByPengajar);
router.put("/:id/arsip", authenticate, controller.softDelete);
router.put("/:id/unarsip", authenticate, controller.restore);
// Santri submit tugas
router.post("/", authenticate, roleMiddleware(["santri"]), controller.submit);
// Santri lihat submission miliknya
router.get("/me", authenticate, roleMiddleware(["santri"]), controller.getForSantri);
/**
 * =========================
 * PENGAJAR
 * =========================
 */
// Pengajar lihat submission dari kelas yang dia ajar
router.get("/pengajar", authenticate, roleMiddleware(["pengajar"]), controller.getForPengajar);
/**
 * =========================
 * PENGAJAR UPDATE STATUS
 * =========================
 */
router.put("/:id/status", authenticate, roleMiddleware(["pengajar"]), controller.updateStatus);
export default router;
//# sourceMappingURL=submission.route.js.map
