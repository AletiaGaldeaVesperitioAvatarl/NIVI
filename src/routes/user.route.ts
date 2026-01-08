import { Router } from "express"
import { UserRepository } from "../repository/user.repository";
import prismaInstance from "../database";
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";




const router = Router()

const userRepo = new UserRepository(prismaInstance);
const userService = new UserService(userRepo);
const userController = new UserController(userService);


router.get("/", userController.getAll);

// GET USER BY ID
router.get("/:id", userController.getById);

// CREATE NEW USER
router.post("/", userController.create);

// UPDATE USER
router.put("/:id", userController.update);

// DEACTIVATE USER
router.delete("/:id", userController.deactivate);

// GET USER STATS
router.get("/stats/all", userController.getStats);

router.get("/santri", userController.getSantri)

export default router