import { Router } from "express";
import prismaInstance from "../../database.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { AdminDashboardRepository } from "../../repository/dashboard/a-dashboard.repository.js";
import { AdminDashboardService } from "../../service/dashboard/a-dashboard.service.js";
import { AdminDashboardController } from "../../controller/dashboard/a-dashboard.controller.js";
import { roleMiddleware } from "../../middlewares/role.middleware.js";
import { Role } from "../../../dist/generated/index.js";
const router = Router();
const repo = new AdminDashboardRepository(prismaInstance);
const service = new AdminDashboardService(repo);
const controller = new AdminDashboardController(service);
router.get("/dashboard/admin", authenticate, roleMiddleware([Role.admin]), controller.getAdminDashboard);
export default router;
//# sourceMappingURL=a.dashboard.route.js.map
