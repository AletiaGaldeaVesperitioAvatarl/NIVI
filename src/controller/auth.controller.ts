import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";
import { successResponse } from "../utils/response";

export class AuthController {
  constructor(private authService: AuthService) {}

  // REGISTER USER
  register = async (req: Request, res: Response) => {
    const { name, email, password, role, kelasId } = req.body;
    const user = await this.authService.register({
      name,
      email,
      password,
      role,
      kelasId
    });
    successResponse(res, "User berhasil didaftarkan", user, null, 201);
  };

  // LOGIN USER
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { token, user } = await this.authService.login(email, password);
    successResponse(res, "Login berhasil", { token, user });
  };
}
