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
// ========================
// AUTH ROUTES
// ========================
// REGISTER
router.post("/register", authController.register);
// LOGIN
router.post("/login", authController.login);
export default router;
//# sourceMappingURL=auth.route.js.map
