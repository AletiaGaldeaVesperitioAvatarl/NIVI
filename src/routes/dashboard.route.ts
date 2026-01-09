import { Router } from "express";
import { DashboardRepository } from "../repository/dashboard.repository";
import { DashboardService } from "../service/dashboard.service";
import { DashboardController } from "../controller/dashboard.controller";
import prismaInstance from "../database";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

const repo = new DashboardRepository(prismaInstance);
const service = new DashboardService(repo);
const controller = new DashboardController(service);

router.get(
  "/pengajar/dashboard",authenticate,
  controller.getPengajarDashboard
);

export default router;
