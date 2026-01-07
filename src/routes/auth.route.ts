import { Router } from "express";
import prismaInstance from "../database";
import { AuthRepository } from "../repository/auth.repository";
import { AuthService } from "../service/auth.service";
import { AuthController } from "../controller/auth.controller";

const router = Router();

// INIT LAYER
const authRepo = new AuthRepository(prismaInstance);
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autentikasi & otorisasi pengguna
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register user baru
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ahmad Fauzi
 *               email:
 *                 type: string
 *                 format: email
 *                 example: fauzi@mail.com
 *               password:
 *                 type: string
 *                 example: rahasia123
 *               kelasId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *       400:
 *         description: Email sudah terdaftar
 */
router.post("/register", authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: fauzi@mail.com
 *               password:
 *                 type: string
 *                 example: rahasia123
 *     responses:
 *       200:
 *         description: Login berhasil
 *       401:
 *         description: Email atau password salah
 */
router.post("/login", authController.login);

export default router;
