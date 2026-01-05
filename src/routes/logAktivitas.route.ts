import { Router } from "express";
import prismaInstance from "../database";
import { LogAktivitasRepository } from "../repository/logAktivitas.repository";
import { LogAktivitasService } from "../service/logaktivitas.service";
import { LogAktivitasController } from "../controller/logAktivitas.controller";

const router = Router();

// DEPENDENCY INJECTION 
const logRepo = new LogAktivitasRepository(prismaInstance);
const logService = new LogAktivitasService(logRepo);
const logController = new LogAktivitasController(logService);

// ROUTES
router.get("/", logController.getAll);
router.get("/user/:userId", logController.getByUser);
router.post("/", logController.create);
router.delete("/:id", logController.delete);

export default router;
