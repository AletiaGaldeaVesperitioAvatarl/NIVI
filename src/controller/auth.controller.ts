import type { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
  constructor(private authService: AuthService) {}
  // LOGIN USER
login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
const result = await this.authService.login(email, password);

if (result.status === "NOT_ACTIVE") {
  return res.status(200).json({
    success: false,
    status: "NOT_ACTIVE",
    message: "Akun belum diaktivasi",
    token: result.token,
  });
}


return res.status(200).json({
  success: true,
  token: result.token,
  user: result.user,
});

}
requestActivation = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      const result = await this.authService.requestActivation(email);

      res.json({
        success: true,
        message: "User ditemukan, lanjutkan aktivasi",
        data: result,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };

  activateAccount = async (req: Request, res: Response) => {
    try {
      const { token, password } = req.body;

      const result = await this.authService.activateAccount(token, password);

      res.json({
        success: true,
        message: result.message,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
}
