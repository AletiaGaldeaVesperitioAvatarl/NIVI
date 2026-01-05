import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { successResponse } from "../utils/response";

export class UserController {
  constructor(private userService: UserService) {}

  getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    successResponse(res, "Semua user berhasil diambil", users);
  };

  getById = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter id tidak ditemukan!");
    }
    const id = Number(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      throw new Error("User tidak ditemukan");
    }

    successResponse(res, "User berhasil ditemukan", user);
  };

  create = async (req: Request, res: Response) => {
    const { name, email, password, role, kelasId } = req.body;
    const user = await this.userService.createUser({
      name,
      email,
      password,
      role,
      kelasId,
    });
    successResponse(res, "User berhasil dibuat", user, null, 201);
  };

  update = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter id tidak ditemukan!");
    }
    const id = Number(req.params.id);
    const data = req.body;
    const updatedUser = await this.userService.updateUser(id, data);
    successResponse(res, "User berhasil diperbarui", updatedUser);
  };

  deactivate = async (req: Request, res: Response) => {
    if (!req.params.id) {
      throw new Error("Parameter id tidak ditemukan!");
    }
    const id = Number(req.params.id);
    const user = await this.userService.deactivateUser(id);
    successResponse(res, "User berhasil dinonaktifkan", user);
  };

  getStats = async (_req: Request, res: Response) => {
    const stats = await this.userService.getStats();
    successResponse(res, "Statistik user berhasil diambil", stats);
  };
}
