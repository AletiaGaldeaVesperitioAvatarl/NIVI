import { Router } from "express";
import prismaInstance from "../database";
import { IzinRepository } from "../repository/izin.repository";
import { IzinService } from "../service/izin.service";
import { IzinController } from "../controller/izin.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";

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
 * /izin/me:
 *   get:
 *     summary: Ambil data izin milik user login
 *     tags: [Izin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil izin user login
 */
router.get("/me", authenticate, izinController.getMyIzin);

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
router.get("/", authenticate, izinController.getAll);

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
 *     responses:
 *       200:
 *         description: Data izin user
 */
router.get("/user/:userId", authenticate, izinController.getByUser);

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
 *     responses:
 *       200:
 *         description: Detail izin ditemukan
 *       404:
 *         description: Izin tidak ditemukan
 */
router.get("/:id", authenticate, izinController.getById);

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
 *               tanggalMulai:
 *                 type: string
 *                 format: date
 *               tanggalSelesai:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Izin berhasil diajukan
 */
router.post("/", authenticate, izinController.create);

/**
 * @swagger
 * /izin/{id}:
 *   put:
 *     summary: Update status izin (approve / reject)
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
 *     responses:
 *       200:
 *         description: Izin berhasil diupdate
 */
router.put("/:id", authenticate, roleMiddleware(["admin", "pengajar"]), izinController.update);

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
