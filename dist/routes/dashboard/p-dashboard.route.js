import { Router } from "express";
import { DashboardRepository } from "../../repository/dashboard/p-dashboard.repository.js";
import { DashboardService } from "../../service/dashboard/p-dashboard.service.js";
import { DashboardController } from "../../controller/dashboard/p-dashboard.controller.js";
import prismaInstance from "../../database.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
const router = Router();
const repo = new DashboardRepository(prismaInstance);
const service = new DashboardService(repo);
const controller = new DashboardController(service);
router.get("/pengajar/dashboard", authenticate, controller.getPengajarDashboard);
export default router;
//# sourceMappingURL=p-dashboard.route.js.map
