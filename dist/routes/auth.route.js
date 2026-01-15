import { Router } from "express";
import prismaInstance from "../database.js";
import { AuthRepository } from "../repository/auth.repository.js";
import { AuthService } from "../service/auth.service.js";
import { AuthController } from "../controller/auth.controller.js";
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
router.post("/request-activation", authController.requestActivation);
router.post("/activate", authController.activateAccount);
export default router;
//# sourceMappingURL=auth.route.js.map
