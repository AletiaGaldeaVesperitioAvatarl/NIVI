import { Router } from "express";
import prismaInstance from "../database";
import { IzinRepository } from "../repository/izin.repository";
import { IzinService } from "../service/izin.service";
import { IzinController } from "../controller/izin.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// INIT DEPENDENCY
const izinRepo = new IzinRepository(prismaInstance);
const izinService = new IzinService(izinRepo);
const izinController = new IzinController(izinService);
/**
 * @swagger
 * tags:
 *   name: Izin
 *   description: Manajemen izin santri
 */

/**
 * @swagger
 * /izin:
 *   get:
 *     summary: Ambil semua data izin
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data izin
 */

// ROUTES
router.get("/", authenticate, izinController.getAll);
/**
 * @swagger
 * /izin/{id}:
 *   get:
 *     summary: Ambil detail izin berdasarkan ID
 *     tags: [Izin]
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
 *         description: Detail izin ditemukan
 *       404:
 *         description: Izin tidak ditemukan
 */
router.get("/:id", authenticate, izinController.getById);
/**
 * @swagger
 * /izin/user/{userId}:
 *   get:
 *     summary: Ambil data izin berdasarkan userId
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: Data izin user
 */
router.get("/user/:userId", authenticate, izinController.getByUser);
/**
 * @swagger
 * /izin:
 *   post:
 *     summary: Ajukan izin
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - alasan
 *               - tanggalMulai
 *               - tanggalSelesai
 *             properties:
 *               alasan:
 *                 type: string
 *                 example: Sakit demam
 *               tanggalMulai:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-07
 *               tanggalSelesai:
 *                 type: string
 *                 format: date
 *                 example: 2026-01-09
 *     responses:
 *       201:
 *         description: Izin berhasil diajukan
 */
router.post("/", authenticate, izinController.create);
/**
 * @swagger
 * /izin/{id}:
 *   put:
 *     summary: Update data izin / status izin
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [menunggu, disetujui, ditolak]
 *                 example: disetujui
 *     responses:
 *       200:
 *         description: Izin berhasil diupdate
 */
router.put("/:id", authenticate, izinController.update);
/**
 * @swagger
 * /izin/{id}:
 *   delete:
 *     summary: Hapus data izin
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Izin berhasil dihapus
 */
router.delete("/:id", authenticate, izinController.delete);

export default router;
