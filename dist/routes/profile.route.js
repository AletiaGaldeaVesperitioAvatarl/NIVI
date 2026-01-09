import { Router } from "express";
import { ProfileRepository } from "../repository/profile.repository.js";
import { ProfileService } from "../service/profile.service.js";
import { ProfileController } from "../controller/profile.controller.js";
import prismaInstance from "../database.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { Role } from "../../dist/generated/index.js";
const router = Router();
// DEPENDENCY INJECTION
const profileRepository = new ProfileRepository(prismaInstance);
const profileService = new ProfileService(profileRepository);
const profileController = new ProfileController(profileService);
// ROUTES
//  GET profile user login
router.get("/me", authenticate, profileController.getMyProfile);
//  GET profile by userId (ADMIN ONLY)
router.get("/user/:userId", authenticate, roleMiddleware([Role.admin]), profileController.getProfileByUserId);
//  CREATE profile (user login)
router.post("/", authenticate, profileController.createProfile);
//  UPDATE profile (user login)
router.put("/", authenticate, profileController.updateProfile);
//  DELETE profile (ADMIN ONLY)
router.delete("/user/:userId", authenticate, roleMiddleware([Role.admin]));
export default router;
//# sourceMappingURL=profile.route.js.map
