import { Request, Response } from "express"
import * as authService from "../service/auth.service"

export const login = async (req: Request, res: Response) => {
  try {
    const result = await authService.login(req.body)
    res.json({
      message: "Login berhasil",
      data: result
    })
  } catch (error: any) {
    res.status(401).json({ message: error.message })
  }
}
