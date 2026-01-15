import { Router } from "express";
import prismaInstance from "../database.js";
import { SubmissionRepository } from "../repository/submission.repository.js";
import { SubmissionService } from "../service/submission.service.js";
import { SubmissionController } from "../controller/submission.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { Role } from "../../dist/generated/index.js";
const router = Router();
// DEPENDENCY
const submissionRepo = new SubmissionRepository(prismaInstance);
const submissionService = new SubmissionService(submissionRepo);
const submissionController = new SubmissionController(submissionService);
/**
 * @swagger
 * tags:
 *   name: Submission
 *   description: Pengumpulan tugas santri
 */
/**
 * @swagger
 * /submission:
 *   post:
 *     summary: Submit tugas (Santri)
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tugasId
 *             properties:
 *               tugasId:
 *                 type: integer
 *                 example: 1
 *               fileUrl:
 *                 type: string
 *                 example: https://drive.google.com/file.pdf
 *               linkUrl:
 *                 type: string
 *                 example: https://github.com/user/tugas
 *     responses:
 *       201:
 *         description: Tugas berhasil dikumpulkan
 */
router.post("/", authenticate, submissionController.submit);
/**
 * @swagger
 * /submission:
 *   get:
 *     summary: Ambil semua submission (Admin / Pengajar)
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Semua submission berhasil diambil
 */
router.get("/", authenticate, roleMiddleware([Role.admin, Role.pengajar]), submissionController.getAll);
/**
 * @swagger
 * /submission/{id}:
 *   get:
 *     summary: Ambil submission berdasarkan ID
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Submission ditemukan
 */
router.get("/:id", authenticate, submissionController.getById);
/**
 * @swagger
 * /submission/user/{userId}:
 *   get:
 *     summary: Ambil submission berdasarkan user
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *     responses:
 *       200:
 *         description: Submission user berhasil diambil
 */
router.get("/user/:userId", authenticate, submissionController.getByUser);
/**
 * @swagger
 * /submission/tugas/{tugasId}:
 *   get:
 *     summary: Ambil submission berdasarkan tugas
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: tugasId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Submission tugas berhasil diambil
 */
router.get("/tugas/:tugasId", authenticate, submissionController.getByTugas);
/**
 * @swagger
 * /submission/{id}/status:
 *   put:
 *     summary: Update status submission (Admin / Pengajar)
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, diterima, ditolak]
 *                 example: diterima
 *     responses:
 *       200:
 *         description: Status submission berhasil diubah
 */
router.put("/:id/status", authenticate, roleMiddleware([Role.admin, Role.pengajar]), submissionController.updateStatus);
/**
 * @swagger
 * /submission/{id}:
 *   delete:
 *     summary: Hapus submission (Admin only)
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Submission berhasil dihapus
 */
router.delete("/:id", authenticate, roleMiddleware([Role.admin]), submissionController.delete);
export default router;
//# sourceMappingURL=submission.route.js.map
