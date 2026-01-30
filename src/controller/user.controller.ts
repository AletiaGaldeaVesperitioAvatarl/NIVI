import type { Request, Response, NextFunction } from "express";
import { UserService } from "../service/user.service";
import { successResponse } from "../utils/response";
import { Role } from "../../dist/generated";

export class UserController {
  constructor(private userService: UserService) {}

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAll();
      return successResponse(res, "Semua user berhasil diambil", users);
    } catch (err) {
      next(err);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (!id) throw new Error("Parameter id tidak valid!");

      const user = await this.userService.getById(id);
      if (!user) throw new Error("User tidak ditemukan");

      return successResponse(res, "User berhasil ditemukan", user);
    } catch (err) {
      next(err);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.createUser(req.body);
      return successResponse(res, "User berhasil dibuat", user, null, 201);
    } catch (err) {
      next(err);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (!id) throw new Error("Parameter id tidak valid!");

      const updatedUser = await this.userService.updateUser(id, req.body);
      return successResponse(res, "User berhasil diperbarui", updatedUser);
    } catch (err) {
      next(err);
    }
  };

  deactivate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (!id) throw new Error("Parameter id tidak valid!");

      const user = await this.userService.deactivateUser(id);
      return successResponse(res, "User berhasil dinonaktifkan", user);
    } catch (err) {
      next(err);
    }
  };

  getStats = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const stats = await this.userService.getStats();
      return successResponse(res, "Statistik user berhasil diambil", stats);
    } catch (err) {
      next(err);
    }
  };

  getSantri = async (_req:Request, res:Response)=>{
    const santri = await this.userService.getSantri()
    successResponse(
      res,
      "Berhasil mengambil semua santri",
      santri
    )
  }

  getPengajar = async (_req:Request, res:Response) =>{
    const pengajar = await this.userService.getPengajar()

    successResponse(
      res,
      "Berhasil mengambil semua pengajar",
      pengajar
    )
  }

  createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const admin = await this.userService.createAdmin(req.body);

    return successResponse(
      res,
      "Admin pertama berhasil dibuat",
      admin,
      null,
      201
    );
  } catch (err) {
    next(err);
  }
};

// di UserController
activate = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);

    let role: Role | undefined;
    if (req.path.includes("santri")) role = Role.santri;
    else if (req.path.includes("pengajar")) role = Role.pengajar;
    else if (req.path.includes("admin")) role = Role.admin;

    const user = await this.userService.activateUser(userId, role);
    res.status(200).json({ message: "User berhasil diaktifkan", user });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

}