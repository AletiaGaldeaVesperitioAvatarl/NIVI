import { Router } from "express";
import { AbsensiController } from "../controller/absensi.controller.js";
import { AbsensiService } from "../service/absensi.service.js";
import { AbsensiRepository } from "../repository/absensi.repository.js";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository.js";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository.js";
import prismaInstance from "../database.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { AbsensiSettingService } from "../service/absensiSetting.service.js";
import { UserRepository } from "../repository/user.repository.js";
import { UserService } from "../service/user.service.js";
import { AIService } from "../ai/ai.service.js";
import { AIAssistantService } from "../service/ai.assistant.service.js";
import { IzinRepository } from "../repository/izin.repository.js";
const router = Router();
// 🔹 Inisialisasi repository & service & controller
const absensiRepo = new AbsensiRepository(prismaInstance);
const settingRepo = new AbsensiSettingRepository(prismaInstance);
const jadwalRepo = new JadwalAbsensiRepository(prismaInstance); // wajib punya method findActiveSchedule
const userRepo = new UserRepository(prismaInstance);
const izinRepo = new IzinRepository(prismaInstance);
const userService = new UserService(userRepo);
const settingService = new AbsensiSettingService(settingRepo);
const AI = new AIService();
const AIAssistantServices = new AIAssistantService(absensiRepo, AI);
const absensiService = new AbsensiService(absensiRepo, settingService, jadwalRepo, AIAssistantServices, izinRepo);
absensiService.startCronRealtime();
const absensiController = new AbsensiController(absensiService, userService);
// POST absen (HADIR/IZIN/SAKIT) opsional jadwalId
router.post("/absen", authenticate, absensiController.absen);
// GET absensi hari ini
router.get("/me/today", authenticate, absensiController.getMyTodayAbsensi);
router.get("/kelas/:kelasId", authenticate, absensiController.getRekapBulanan);
// 🔹 ADMIN CRUD (opsional, kalau admin ingin mengelola absensi manual)
router.get("/", absensiController.getAll); // semua absensi
router.get("/:id", authenticate, absensiController.getByUserId); // lihat absensi per user
router.get("/kelas/:kelasId/absensi", absensiController.getByKelas);
router.put("/:id", authenticate, absensiController.update); // update status
router.delete("/:id", authenticate, absensiController.delete); // hapus absensi
export default router;
//# sourceMappingURL=absensi.route.js.map
