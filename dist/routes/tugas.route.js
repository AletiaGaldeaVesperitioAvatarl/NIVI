import { Router } from "express";
import { TugasRepository } from "../repository/tugas.repository.js";
import prismaInstance from "../database.js";
import { TugasService } from "../service/tugas.service.js";
import { TugasController } from "../controller/tugas.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = Router();
// INIT LAYER
const tugasRepo = new TugasRepository(prismaInstance);
const tugasService = new TugasService(tugasRepo);
const tugasController = new TugasController(tugasService);
// ========================
// TUGAS ROUTES
// ========================
router.get("/santri", authenticate, tugasController.getForSantri);
router.patch("/santri/:id/archive", authenticate, tugasController.archiveExpiredForSantri);
router.get("/santri/arsip", authenticate, tugasController.getArchivedForSantri);
// GET ALL TUGAS
router.get("/", tugasController.getAll);
// GET TUGAS BY ID
router.get("/:id", authenticate, tugasController.getById);
// CREATE TUGAS
router.post("/", authenticate, tugasController.create);
// UPDATE TUGAS
router.put("/:id", authenticate, tugasController.update);
// DELETE TUGAS
router.delete("/:id", authenticate, tugasController.delete);
export default router;
//# sourceMappingURL=tugas.route.js.map
