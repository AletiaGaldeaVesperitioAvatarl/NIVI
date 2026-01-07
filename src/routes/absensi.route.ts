import { Router } from "express";
import { AbsensiRepository } from "../repository/absensi.repository";
import prismaInstance from "../database";
import { AbsensiService } from "../service/absensi.service";
import { AbsensiController } from "../controller/absensi.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// INIT LAYER
const absensiRepo = new AbsensiRepository(prismaInstance);
const absensiService = new AbsensiService(absensiRepo);
const absensiController = new AbsensiController(absensiService);

/**
 * @swagger
 * tags:
 *   name: Absensi
 *   description: Manajemen absensi santri
 */

/**
 * @swagger
 * /absensi:
 *   get:
 *     summary: Ambil semua data absensi
 *     tags: [Absensi]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua absensi
 */

// GET ALL
router.get("/", absensiController.getAll);
/**
 * @swagger
 * /absensi/me/today:
 *   get:
 *     summary: Ambil absensi hari ini (user login)
 *     tags: [Absensi]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data absensi hari ini
 *       404:
 *         description: User belum melakukan absensi hari ini
 */
// GET BY USER ID
router.get("/me/today", absensiController.getMyTodayAbsensi);
/**
 * @swagger
 * /absensi/me/absen:
 *   post:
 *     summary: Melakukan absensi hari ini
 *     tags: [Absensi]
 *     security:
 *       - bearerAuth: []
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
 *                 enum: [hadir, izin, alpha]
 *                 example: hadir
 *     responses:
 *       201:
 *         description: Absensi berhasil dicatat
 *       400:
 *         description: Sudah absen hari ini
 */

router.post("/me/absen", absensiController.absen);""
/**
 * @swagger
 * /absensi/user/{userId}:
 *   get:
 *     summary: Ambil absensi berdasarkan userId
 *     tags: [Absensi]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Data absensi user
 */
router.get("/user/:userId", absensiController.getByUserId);
// GET BY ID
/**
 * @swagger
 * /absensi/{id}:
 *   get:
 *     summary: Ambil detail absensi berdasarkan ID
 *     tags: [Absensi]
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
 *         description: Detail absensi
 */
router.get("/:id", absensiController.getById);

/**
 * @swagger
 * /absensi/{id}:
 *   put:
 *     summary: Update data absensi
 *     tags: [Absensi]
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
 *                 enum: [hadir, izin, alpha]
 *     responses:
 *       200:
 *         description: Absensi berhasil diupdate
 */
// CREATE

// UPDATE
router.put("/:id", absensiController.update);

/**
 * @swagger
 * /absensi/{id}:
 *   delete:
 *     summary: Hapus data absensi
 *     tags: [Absensi]
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
 *         description: Absensi berhasil dihapus
 */
// DELETE
router.delete("/:id", absensiController.delete);

export default router;
