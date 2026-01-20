import { Router } from "express";
import { AbsensiController } from "../controller/absensi.controller";
import { AbsensiService } from "../service/absensi.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";
import prismaInstance from "../database";
import { authenticate } from "../middlewares/auth.middleware";


const router = Router();

// 🔹 Inisialisasi repository & service & controller
const absensiRepo = new AbsensiRepository(prismaInstance);
const settingRepo = new AbsensiSettingRepository(prismaInstance);
const jadwalRepo = new JadwalAbsensiRepository(prismaInstance); // wajib punya method findActiveSchedule
const absensiService = new AbsensiService(absensiRepo, settingRepo, jadwalRepo);
const absensiController = new AbsensiController(absensiService);

// POST absen (HADIR/IZIN/SAKIT) opsional jadwalId
router.post("/absen", authenticate,absensiController.absen);

// GET absensi hari ini
router.get("/me/today",authenticate, absensiController.getMyTodayAbsensi);

// 🔹 ADMIN CRUD (opsional, kalau admin ingin mengelola absensi manual)
router.get("/", authenticate,absensiController.getAll); // semua absensi
router.get("/:id", authenticate,absensiController.getByUserId); // lihat absensi per user
router.put("/:id", authenticate,absensiController.update); // update status
router.delete("/:id",authenticate, absensiController.delete); // hapus absensi

export default router;
