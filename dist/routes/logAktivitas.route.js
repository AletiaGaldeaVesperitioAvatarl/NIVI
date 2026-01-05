import { Router } from "express";
import prismaInstance from "../database.js";
import { LogAktivitasRepository } from "../repository/logAktivitas.repository.js";
import { LogAktivitasService } from "../service/logaktivitas.service.js";
import { LogAktivitasController } from "../controller/logAktivitas.controller.js";
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
//# sourceMappingURL=logAktivitas.route.js.map
