import { Router } from "express";
import {createTugas, getAllTugas}from "../controller/tugas.controller"

const router = Router()

router.post("/", createTugas)
router.post("/", getAllTugas)

export default router