import { Router } from "express";
import prismaInstance from "../database.js";
import { IzinRepository } from "../repository/izin.repository.js";
import { AbsensiRepository } from "../repository/absensi.repository.js";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository.js";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository.js";
import { IzinService } from "../service/izin.service.js";
import { AbsensiService } from "../service/absensi.service.js";
import { AbsensiSettingService } from "../service/absensiSetting.service.js";
import { IzinController } from "../controller/izin.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { AIAssistantService } from "../service/ai.assistant.service.js";
import { AIService } from "../ai/ai.service.js";
const router = Router();
/* =======================
   INIT REPOSITORY
======================= */
const izinRepo = new IzinRepository(prismaInstance);
const absensiRepo = new AbsensiRepository(prismaInstance);
const settingRepo = new AbsensiSettingRepository(prismaInstance);
const jadwalRepo = new JadwalAbsensiRepository(prismaInstance);
const AI = new AIService();
const AIAssistant = new AIAssistantService(absensiRepo, AI);
/* =======================
   INIT SERVICE
======================= */
const settingService = new AbsensiSettingService(settingRepo);
const absensiService = new AbsensiService(absensiRepo, settingService, jadwalRepo, AIAssistant, izinRepo);
const izinService = new IzinService(izinRepo, absensiRepo, absensiService, settingService, jadwalRepo);
/* =======================
   CONTROLLER
======================= */
const izinController = new IzinController(izinService);
/* =======================
   ROUTES
======================= */
// ROUTES UNTUK SANTRI
router.get("/me", authenticate, izinController.getMyIzin);
router.post("/", authenticate, izinController.create);
// ROUTES UNTUK ADMIN / PENGAJAR
router.get("/all/pengajar", authenticate, izinController.getAllByPengajar);
router.get("/", authenticate, izinController.getAll);
router.get("/user/:userId", izinController.getByUser);
router.delete("/:id", authenticate, izinController.softDelete);
router.get("/arsip", authenticate, izinController.getAllArchived);
router.get("/:id", authenticate, roleMiddleware(["admin", "pengajar"]), izinController.getById);
router.put("/:id", authenticate, roleMiddleware(["admin", "pengajar"]), izinController.update);
router.delete("/:id", authenticate, roleMiddleware(["admin", "pengajar"]), izinController.delete);
export default router;
//# sourceMappingURL=izin.route.js.map
