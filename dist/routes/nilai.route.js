import { Router } from "express";
import { NilaiRepository } from "../repository/nilai.repository.js";
import { NilaiService } from "../service/nilai.service.js";
import { NilaiController } from "../controller/nilai.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import prismaInstance from "../database.js";
const repo = new NilaiRepository(prismaInstance);
const service = new NilaiService(repo);
const controller = new NilaiController(service);
const router = Router();
// hanya pengajar
router.get("/", authenticate, controller.getAll);
router.get("/submission/:submissionId", authenticate, controller.getBySubmission);
router.post("/", authenticate, controller.create);
router.put("/submission/:submissionId", authenticate, controller.update);
router.delete("/submission/:submissionId", authenticate, controller.delete);
export default router;
//# sourceMappingURL=nilai.route.js.map
