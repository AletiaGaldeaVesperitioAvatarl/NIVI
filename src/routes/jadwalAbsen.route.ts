import { Router } from "express";
import prismaInstance from "../database";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";
import { JadwalAbsensiService } from "../service/jadwalAbsensi.service";
import { JadwalAbsensiController } from "../controller/jadwalAbsensi.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

const repo = new JadwalAbsensiRepository(prismaInstance);
const service = new JadwalAbsensiService(repo);
const controller = new JadwalAbsensiController(service);

// CRUD
router.post("/", authenticate, controller.create);        // create 1
router.post("/bulk", authenticate, controller.createBulk); // create banyak hari / bulan
router.get("/kelas/:kelasId", authenticate,controller.getAllByKelas);
router.get("/:id", authenticate, controller.getById);
router.put("/:id", authenticate, controller.update);
router.delete("/:id", authenticate, controller.delete);

export default router;
