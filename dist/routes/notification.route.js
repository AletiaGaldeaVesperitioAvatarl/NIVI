import { Router } from "express";
import prismaInstance from "../database.js";
import { NotificationRepository } from "../repository/notification.repository.js";
import { NotificationService } from "../service/notification.service.js";
import { NotificationController } from "../controller/notification.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const router = Router();
// INIT
const repo = new NotificationRepository(prismaInstance);
const service = new NotificationService(repo);
const controller = new NotificationController(service);
// GET MY NOTIFICATIONS
router.get("/me", authenticate, controller.getMyNotifications);
// MARK AS READ
router.put("/:id/read", authenticate, controller.markAsRead);
export default router;
//# sourceMappingURL=notification.route.js.map
