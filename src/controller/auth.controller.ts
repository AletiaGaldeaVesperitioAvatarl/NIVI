import { Request, Response, NextFunction } from "express";
import { AuthService } from "../service/auth.service";
import { successResponse } from "../utils/response";

export class AuthController {
  constructor(private service: AuthService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = await this.service.login(email, password);
      return successResponse(res, "Login berhasil", result);
    } catch (err) {
      next(err);
    }
  };

  requestActivationOtp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const result = await this.service.requestActivationOtp(email);
      return successResponse(res, "OTP aktivasi terkirim", result);
    } catch (err) {
      next(err);
    }
  };

  activateWithOtp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, otp, password } = req.body;
      const user = await this.service.activateWithOtp(email, otp, password);
      return successResponse(res, "Akun berhasil diaktivasi", { id: user.id, email: user.email });
    } catch (err) {
      next(err);
    }
  };

  forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const result = await this.service.forgotPassword(email);
      return successResponse(res, "OTP reset password dikirim", result);
    } catch (err) {
      next(err);
    }
  };

  resetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, otp, newPassword } = req.body;
      const result = await this.service.resetPassword(email, otp, newPassword);
      return successResponse(res, "Password berhasil direset", result);
    } catch (err) {
      next(err);
    }
  };
}
