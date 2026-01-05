import { Router } from "express";
import prismaInstance from "../database";
import { NilaiRepository } from "../repository/nilai.repository";
import { NilaiService } from "../service/nilai.service";
import { NilaiController } from "../controller/nilai.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { Role } from "../generated/client";

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
router.post(
  "/",
  authenticate,
  roleMiddleware([Role.admin, Role.pengajar]),
  nilaiController.create
);

router.put(
  "/:id",
  authenticate,
  roleMiddleware([Role.admin, Role.pengajar]),
  nilaiController.update
);

router.delete(
  "/:id",
  authenticate,
  roleMiddleware([Role.admin]),
  nilaiController.delete
);

export default router;
