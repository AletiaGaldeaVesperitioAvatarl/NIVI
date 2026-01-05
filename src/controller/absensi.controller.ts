import { Request, Response } from "express"
import * as absensiService from "../service/absensi.service"

export const createAbsensi = async (req: Request, res: Response) => {
  try {
    const result = await absensiService.createAbsensi(req.body)
    res.status(201).json({
      message: "Absensi berhasil dibuat",
      data: result
    })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllAbsensi = async (_req: Request, res: Response) => {
  const
}
