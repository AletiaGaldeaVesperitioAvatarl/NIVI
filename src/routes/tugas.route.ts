import { Router } from "express";
import { TugasRepository } from "../repository/tugas.repository";
import prismaInstance from "../database";
import { TugasService } from "../service/tugas.service";
import { TugasController } from "../controller/tugas.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { Role } from "../../dist/generated";

const router = Router();

// INIT LAYER
const tugasRepo = new TugasRepository(prismaInstance);
const tugasService = new TugasService(tugasRepo);
const tugasController = new TugasController(tugasService);

/**
 * @swagger
 * tags:
 *   name: Tugas
 *   description: Manajemen tugas santri
 */

// ========================
// TUGAS ROUTES
// ========================

/**
 * @swagger
 * /tugas:
 *   get:
 *     summary: Ambil semua tugas
 *     tags: [Tugas]
 *     responses:
 *       200:
 *         description: Semua tugas berhasil diambil
 */
router.get("/", tugasController.getAll);

/**
 * @swagger
 * /tugas/{id}:
 *   get:
 *     summary: Ambil tugas berdasarkan ID
 *     tags: [Tugas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Tugas ditemukan
 */
router.get("/:id", tugasController.getById);

/**
 * @swagger
 * /tugas:
 *   post:
 *     summary: Buat tugas baru (Admin / Pengajar)
 *     tags: [Tugas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - deadline
 *               - kelasId
 *             properties:
 *               title:
 *                 type: string
 *                 example: Tugas Algoritma
 *               description:
 *                 type: string
 *                 example: Buat flowchart login
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-01-20T23:59:00Z
 *               kelasId:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Tugas berhasil dibuat
 */
router.post(
  "/",
  authenticate,
  roleMiddleware([Role.admin, Role.pengajar]),
  tugasController.create
);

/**
 * @swagger
 * /tugas/{id}:
 *   put:
 *     summary: Update tugas (Admin / Pengajar)
 *     tags: [Tugas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 3
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Tugas Algoritma Update
 *               description:
 *                 type: string
 *                 example: Update soal flowchart
 *               deadline:
 *                 type: string
 *                 format: date-time
 *                 example: 2026-01-25T23:59:00Z
 *     responses:
 *       200:
 *         description: Tugas berhasil diperbarui
 */
router.put(
  "/:id",
  authenticate,
  roleMiddleware([Role.admin, Role.pengajar]),
  tugasController.update
);

/**
 * @swagger
 * /tugas/{id}:
 *   delete:
 *     summary: Hapus tugas (Admin only)
 *     tags: [Tugas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 4
 *     responses:
 *       200:
 *         description: Tugas berhasil dihapus
 */
router.delete(
  "/:id",
  authenticate,
  roleMiddleware([Role.admin]),
  tugasController.delete
);

export default router;
