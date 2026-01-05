import { Router } from "express";
import { AbsensiRepository } from "../repository/absensi.repository.js";
import prismaInstance from "../database.js";
import { AbsensiService } from "../service/absensi.service.js";
import { AbsensiController } from "../controller/absensi.controller.js";
const router = Router();
// INIT LAYER
const absensiRepo = new AbsensiRepository(prismaInstance);
const absensiService = new AbsensiService(absensiRepo);
const absensiController = new AbsensiController(absensiService);
// ========================
// ABSENSI ROUTES
// ========================
// GET ALL
router.get("/", absensiController.getAll);
// GET BY ID
router.get("/:id", absensiController.getById);
// GET BY USER ID
router.get("/user/:userId", absensiController.getByUserId);
// CREATE
router.post("/", absensiController.create);
// UPDATE
router.put("/:id", absensiController.update);
// DELETE
router.delete("/:id", absensiController.delete);
export default router;
//# sourceMappingURL=absensi.route.js.map
