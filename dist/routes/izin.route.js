import { Router } from "express";
import prismaInstance from "../database.js";
import { IzinRepository } from "../repository/izin.repository.js";
import { IzinService } from "../service/izin.service.js";
import { IzinController } from "../controller/izin.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = Router();
// INIT DEPENDENCY
const izinRepo = new IzinRepository(prismaInstance);
const izinService = new IzinService(izinRepo);
const izinController = new IzinController(izinService);
// ROUTES
router.get("/", authenticate, izinController.getAll);
router.get("/:id", authenticate, izinController.getById);
router.get("/user/:userId", authenticate, izinController.getByUser);
router.post("/", authenticate, izinController.create);
router.put("/:id", authenticate, izinController.update);
router.delete("/:id", authenticate, izinController.delete);
export default router;
//# sourceMappingURL=izin.route.js.map
