import { Router } from "express";
import { AbsensiRepository } from "../repository/absensi.repository";
import prismaInstance from "../database";
import { AbsensiService } from "../service/absensi.service";
import { AbsensiController } from "../controller/absensi.controller";

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

// GET BY ID
router.get("/:id", absensiController.getById);

// GET BY USER ID
router.get("/user/:userId", absensiController.getByUserId);

// CREATE
router.post("/", absensiController.create);

// UPDATE
router.put("/:id", absensiController.update);

// DELETE
router.delete("/:id", absensiController.delete);

export default router;
