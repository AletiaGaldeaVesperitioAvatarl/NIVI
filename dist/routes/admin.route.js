import { Router } from "express";
import prismaInstance from "../database.js";
import { AdminRepository } from "../repository/admin.repository.js";
import { AdminService } from "../service/admin.service.js";
import { AdminController } from "../controller/admin.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { Role } from "../../dist/generated/index.js";
const router = Router();
const repo = new AdminRepository(prismaInstance);
const service = new AdminService(repo);
const controller = new AdminController(service);
// ADMIN INPUT SANTRI
router.post("/santri", authenticate, roleMiddleware([Role.admin]), controller.createSantriByAdmin);
router.post("/activate", controller.activateAccount);
// 🔐 ADMIN ONLY
router.post("/kelas/pengajar", authenticate, roleMiddleware([Role.admin]), controller.assignPengajar);
router.delete("/kelas/pengajar", authenticate, roleMiddleware([Role.admin]), controller.removePengajar);
router.get("/kelas/:kelasId/pengajar", authenticate, roleMiddleware([Role.admin]), controller.getPengajarByKelas);
router.post("/pengajar", controller.createPengajarByAdmin);
router.post("/create/user", controller.createUser);
export default router;
//# sourceMappingURL=admin.route.js.map
