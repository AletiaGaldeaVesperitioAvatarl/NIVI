import { Router } from "express";
import {
    createAbsensi,
    getAllAbsensi
}from "../controller/absensi.controller"

const router = Router()

router.post("/", createAbsensi)
router.get("/", getAllAbsensi)

export default router