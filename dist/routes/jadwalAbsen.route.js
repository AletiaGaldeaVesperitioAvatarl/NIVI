import { Router } from "express";
import prismaInstance from "../database.js";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository.js";
import { JadwalAbsensiService } from "../service/jadwalAbsensi.service.js";
import { JadwalAbsensiController } from "../controller/jadwalAbsensi.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository.js";
const router = Router();
const repo = new JadwalAbsensiRepository(prismaInstance);
const settingRepo = new AbsensiSettingRepository(prismaInstance);
const service = new JadwalAbsensiService(repo, settingRepo);
const controller = new JadwalAbsensiController(service);
// CRUD
router.post("/", authenticate, controller.create); // create 1
router.get("/", authenticate, controller.getKelasAndTanggal);
router.get("/:id", authenticate, controller.getById);
router.post("/bulk", authenticate, controller.createBulk); // create banyak hari / bulan
router.get("/kelas/:kelasId", authenticate, controller.getAllByKelas);
router.put("/:id", authenticate, controller.update);
router.delete("/:id", authenticate, controller.delete);
export default router;
//# sourceMappingURL=jadwalAbsen.route.js.map
