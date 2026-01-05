import { Router } from "express";
import { KelasRepository } from "../repository/kelas.repository";
import prismaInstance from "../database";
import { KelasService } from "../service/kelas.service";
import { KelasController } from "../controller/kelas.controller";

const router = Router();

// INIT LAYER
const kelasRepo = new KelasRepository(prismaInstance);
const kelasService = new KelasService(kelasRepo);
const kelasController = new KelasController(kelasService);

// ========================
// KELAS ROUTES
// ========================

// GET ALL KELAS
router.get("/", kelasController.getAll);

// GET KELAS BY ID
router.get("/:id", kelasController.getById);

// CREATE KELAS
router.post("/", kelasController.create);

// UPDATE KELAS
router.put("/:id", kelasController.update);

// DELETE KELAS
router.delete("/:id", kelasController.delete);

export default router;
