import { Router } from "express";
import { AbsensiRepository } from "../repository/absensi.repository";
import prismaInstance from "../database";
import { AbsensiService } from "../service/absensi.service";
import { AbsensiController } from "../controller/absensi.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// INIT LAYER
const absensiRepo = new AbsensiRepository(prismaInstance);
const absensiService = new AbsensiService(absensiRepo);
const absensiController = new AbsensiController(absensiService);

// ========================
// ABSENSI ROUTES
// ========================

// GET ALL
router.get("/", absensiController.getAll);

// GET BY USER ID

router.get("/me/today", authenticate, absensiController.getMyTodayAbsensi);

router.post("/me/absen", authenticate, absensiController.absen);

router.get("/user/:userId", absensiController.getByUserId);
// GET BY ID

router.get("/:id", absensiController.getById);

// UPDATE
router.put("/:id", absensiController.update);

// DELETE
router.delete("/:id", absensiController.delete);

export default router;
