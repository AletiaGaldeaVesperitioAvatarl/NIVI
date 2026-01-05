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

// ROUTES
router.get("/", authenticate, izinController.getAll);
router.get("/:id", authenticate, izinController.getById);
router.get("/user/:userId", authenticate, izinController.getByUser);

router.post("/", authenticate, izinController.create);
router.put("/:id", authenticate, izinController.update);
router.delete("/:id", authenticate, izinController.delete);

export default router;
