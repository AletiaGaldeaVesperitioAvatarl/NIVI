import { Router } from "express";
import prismaInstance from "../database.js";
import { NilaiRepository } from "../repository/nilai.repository.js";
import { NilaiService } from "../service/nilai.service.js";
import { NilaiController } from "../controller/nilai.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { Role } from "../../dist/generated/index.js";
const router = Router();
// INIT DEPENDENCY
const nilaiRepo = new NilaiRepository(prismaInstance);
const nilaiService = new NilaiService(nilaiRepo);
const nilaiController = new NilaiController(nilaiService);
// ROUTES
router.get("/", authenticate, nilaiController.getAll);
router.get("/:id", authenticate, nilaiController.getById);
router.get("/user/:userId", authenticate, nilaiController.getByUser);
router.get("/tugas/:tugasId", authenticate, nilaiController.getByTugas);
// HANYA PENGAJAR / ADMIN YANG BOLEH NILAI
router.post("/", authenticate, roleMiddleware([Role.admin, Role.pengajar]), nilaiController.create);
router.put("/:id", authenticate, roleMiddleware([Role.admin, Role.pengajar]), nilaiController.update);
router.delete("/:id", authenticate, roleMiddleware([Role.admin]), nilaiController.delete);
export default router;
//# sourceMappingURL=nilai.route.js.map
