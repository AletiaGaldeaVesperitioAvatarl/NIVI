import { Router } from "express";
import prismaInstance from "../database.js";
import { NilaiRepository } from "../repository/nilai.repository.js";
import { NilaiService } from "../service/nilai.service.js";
import { NilaiController } from "../controller/nilai.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { Role } from "../../dist/generated/index.js";
const router = Router();
// INIT DEPENDENCY
const nilaiRepo = new NilaiRepository(prismaInstance);
const nilaiService = new NilaiService(nilaiRepo);
const nilaiController = new NilaiController(nilaiService);
/**
 * @swagger
 * tags:
 *   name: Nilai
 *   description: Manajemen nilai santri
 */
/**
 * @swagger
 * /nilai:
 *   get:
 *     summary: Ambil semua nilai
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Semua nilai berhasil diambil
 */
router.get("/", authenticate, nilaiController.getAll);
/**
 * @swagger
 * /nilai/{id}:
 *   get:
 *     summary: Ambil nilai berdasarkan ID
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Nilai ditemukan
 */
router.get("/:id", authenticate, nilaiController.getById);
/**
 * @swagger
 * /nilai/user/{userId}:
 *   get:
 *     summary: Ambil nilai berdasarkan user
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Nilai user berhasil diambil
 */
router.get("/user/:userId", authenticate, nilaiController.getByUser);
/**
 * @swagger
 * /nilai/tugas/{tugasId}:
 *   get:
 *     summary: Ambil nilai berdasarkan tugas
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: tugasId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Nilai tugas berhasil diambil
 */
router.get("/tugas/:tugasId", authenticate, nilaiController.getByTugas);
/**
 * @swagger
 * /nilai:
 *   post:
 *     summary: Tambah nilai santri (Pengajar / Admin)
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - tugasId
 *               - nilai
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 10
 *               tugasId:
 *                 type: integer
 *                 example: 5
 *               nilai:
 *                 type: number
 *                 example: 90
 *               catatan:
 *                 type: string
 *                 example: Mantap, lanjutkan!
 *     responses:
 *       201:
 *         description: Nilai berhasil ditambahkan
 */
router.post("/", authenticate, roleMiddleware([Role.admin, Role.pengajar]), nilaiController.create);
/**
 * @swagger
 * /nilai/{id}:
 *   put:
 *     summary: Update nilai santri (Pengajar / Admin)
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nilai:
 *                 type: number
 *                 example: 95
 *               catatan:
 *                 type: string
 *                 example: Ada peningkatan 👍
 *     responses:
 *       200:
 *         description: Nilai berhasil diupdate
 */
router.put("/:id", authenticate, roleMiddleware([Role.admin, Role.pengajar]), nilaiController.update);
/**
 * @swagger
 * /nilai/{id}:
 *   delete:
 *     summary: Hapus nilai (Admin only)
 *     tags: [Nilai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Nilai berhasil dihapus
 */
router.delete("/:id", authenticate, roleMiddleware([Role.admin]), nilaiController.delete);
export default router;
//# sourceMappingURL=nilai.route.js.map
