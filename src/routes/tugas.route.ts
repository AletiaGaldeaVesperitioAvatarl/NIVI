import { Router } from "express";
import { TugasRepository } from "../repository/tugas.repository";
import prismaInstance from "../database";
import { TugasService } from "../service/tugas.service";
import { TugasController } from "../controller/tugas.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// INIT LAYER
const tugasRepo = new TugasRepository(prismaInstance);
const tugasService = new TugasService(tugasRepo);
const tugasController = new TugasController(tugasService);

router.get("/task", authenticate, tugasController.getForSantri);
// GET ALL TUGAS
router.get("/", authenticate,tugasController.getAll);

// GET TUGAS BY ID
router.get("/:id",authenticate, tugasController.getById);

// CREATE TUGAS
router.post("/", authenticate,tugasController.create);

// UPDATE TUGAS
router.put("/:id",authenticate, tugasController.update);

// DELETE TUGAS
router.delete("/:id",authenticate, tugasController.delete);

export default router;
