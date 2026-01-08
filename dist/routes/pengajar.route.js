import { Router } from "express";
import { PengajarRepository } from "../repository/pengajar.repository.js";
import prismaInstance from "../database.js";
import { PengajarService } from "../service/pengajar.service.js";
import { PengajarController } from "../controller/pengajar.controller.js";
const router = Router();
const repo = new PengajarRepository(prismaInstance);
const service = new PengajarService(repo);
const controller = new PengajarController(service);
// Hanya admin yang bisa create pengajar
router.post("/", controller.create);
export default router;
//# sourceMappingURL=pengajar.route.js.map
