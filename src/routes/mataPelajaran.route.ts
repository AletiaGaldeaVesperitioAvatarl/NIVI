import { Router } from "express";
import prismaInstance from "../database";
import { MataPelajaranRepository } from "../repository/mataPelajaran.repository";
import { MataPelajaranService } from "../service/mataPelajaran.service";
import { MataPelajaranController } from "../controller/mataPelajaran.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// INIT
const repo = new MataPelajaranRepository(prismaInstance);
const service = new MataPelajaranService(repo);
const controller = new MataPelajaranController(service);

/**
 * @swagger
 * tags:
 *   name: MataPelajaran
 *   description: Manajemen mata pelajaran
 */

/**
 * @swagger
 * /mapel:
 *   post:
 *     summary: Tambah mata pelajaran
 *     tags: [MataPelajaran]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - kode
 *               - kelasId
 *               - pengajarId
 *             properties:
 *               nama:
 *                 type: string
 *                 example: Matematika
 *               kode:
 *                 type: string
 *                 example: MTK-01
 *               kelasId:
 *                 type: number
 *                 example: 1
 *               pengajarId:
 *                 type: number
 *                 example: 5
 */
router.post("/", authenticate, controller.create);

/**
 * @swagger
 * /mapel:
 *   get:
 *     summary: Ambil semua mata pelajaran
 *     tags: [MataPelajaran]
 *     security:
 *       - bearerAuth: []
 */
router.get("/", authenticate, controller.getAll);

/**
 * @swagger
 * /mapel/kelas/{kelasId}:
 *   get:
 *     summary: Ambil mata pelajaran berdasarkan kelas
 *     tags: [MataPelajaran]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: kelasId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.get(
  "/kelas/:kelasId",
  authenticate,
  controller.getByKelas
);

/**
 * @swagger
 * /mapel/pengajar/{pengajarId}:
 *   get:
 *     summary: Ambil mata pelajaran berdasarkan pengajar
 *     tags: [MataPelajaran]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: pengajarId
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.get(
  "/pengajar/:pengajarId",
  authenticate,
  controller.getByPengajar
);

/**
 * @swagger
 * /mapel/{id}:
 *   delete:
 *     summary: Hapus mata pelajaran
 *     tags: [MataPelajaran]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/:id", authenticate, controller.delete);

export default router;
