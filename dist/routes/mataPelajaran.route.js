import { Router } from "express";
import prisma from "../database.js";
import { MataPelajaranRepository } from "../repository/mataPelajaran.repository.js";
import { MataPelajaranService } from "../service/mataPelajaran.service.js";
import { MataPelajaranController } from "../controller/mataPelajaran.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = Router();
const repo = new MataPelajaranRepository(prisma);
const service = new MataPelajaranService(repo);
const controller = new MataPelajaranController(service);
// ADMIN / PENGAJAR
router.get("/", controller.getAll);
router.get("/:id", authenticate, controller.getById);
router.post("/", authenticate, controller.create);
router.put("/:id", authenticate, controller.update);
router.delete("/:id", authenticate, controller.delete);
export default router;
//# sourceMappingURL=mataPelajaran.route.js.map
