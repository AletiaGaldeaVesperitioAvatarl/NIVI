import { Router } from "express";
import { AutomationController } from "../controller/automation.controller";
import { AbsensiService } from "../service/absensi.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import prismaInstance from "../database";
import { automationAuth } from "../middlewares/automationAuth";
import { AbsensiSettingRepository } from "../repository/absensiSetting.repository";
import { AbsensiSettingService } from "../service/absensiSetting.service";
import { JadwalAbsensiRepository } from "../repository/jadwalAbsensi.repository";

const router = Router();
const settingRepo = new AbsensiSettingRepository(prismaInstance);
const jadwalRepo = new JadwalAbsensiRepository(prismaInstance);
const settingService = new AbsensiSettingService(settingRepo)
const absensiRepo = new AbsensiRepository(prismaInstance)
const absensiService = new AbsensiService(absensiRepo, settingService, jadwalRepo);
const controller = new AutomationController(absensiService);

router.post(
  "/generate-alpha",
  automationAuth,
  controller.generateAlpha
);

export default router;
