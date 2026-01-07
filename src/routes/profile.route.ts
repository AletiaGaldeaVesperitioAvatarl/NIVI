import { Router } from "express";
import { ProfileRepository } from "../repository/profile.repository";
import { ProfileService } from "../service/profile.service";
import { ProfileController } from "../controller/profile.controller";
import prismaInstance from "../database";
import { authenticate } from "../middlewares/auth.middleware";
import { roleMiddleware } from "../middlewares/role.middleware";
import { Role } from "../../dist/generated";

const router = Router();


// DEPENDENCY INJECTION
const profileRepository = new ProfileRepository(prismaInstance);
const profileService = new ProfileService(profileRepository);
const profileController = new ProfileController(profileService);

// ROUTES

//  GET profile user login
router.get(
  "/me",
  authenticate,
  profileController.getMyProfile
);

//  GET profile by userId (ADMIN ONLY)
router.get(
  "/user/:userId",
  authenticate,
  roleMiddleware([Role.admin]),
  profileController.getProfileByUserId
);

//  CREATE profile (user login)
router.post(
  "/",
  authenticate,
  profileController.createProfile
);

//  UPDATE profile (user login)
router.put(
  "/",
  authenticate,
  profileController.updateProfile
);

//  DELETE profile (ADMIN ONLY)
router.delete(
  "/user/:userId",
  authenticate,
  roleMiddleware([Role.admin]),
  // profileController.deletedProfileByUserId
);

export default router;
