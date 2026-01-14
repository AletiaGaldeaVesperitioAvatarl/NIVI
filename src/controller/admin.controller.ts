import type { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/response";
import { AdminService } from "../service/admin.service";

export class AdminController {
  constructor(private service: AdminService) {}

  createSantriByAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const santri = await this.service.createSantriByAdmin(req.body);
      return successResponse(
        res,
        "Santri berhasil didaftarkan, menunggu aktivasi",
        santri,
        null,
        201
      );
    } catch (err) {
      next(err);
    }
  };

activateAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      throw new Error("Token dan password wajib diisi");
    }

    const user = await this.service.activate(token, password);

    return successResponse(res, "Akun berhasil diaktivasi", {
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    next(err);
  }
};


  assignPengajar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { kelasId, pengajarId } = req.body;

      await this.service.assign(Number(kelasId), Number(pengajarId));

      return successResponse(
        res,
        "Pengajar berhasil ditambahkan ke kelas",
        null
      );
    } catch (err) {
      next(err);
    }
  };

  removePengajar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { kelasId, pengajarId } = req.body;

      await this.service.remove(Number(kelasId), Number(pengajarId));

      return successResponse(
        res,
        "Pengajar berhasil dihapus dari kelas",
        null
      );
    } catch (err) {
      next(err);
    }
  };

  getPengajarByKelas = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const kelasId = Number(req.params.kelasId);
      if (!kelasId) throw new Error("kelasId tidak valid");

      const pengajar = await this.service.listPengajar(kelasId);

      return successResponse(
        res,
        "Berhasil mengambil pengajar kelas",
        pengajar
      );
    } catch (err) {
      next(err);
    }
  };


  createPengajarByAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const pengajar = await this.service.createPengajarByAdmin(req.body);

      return successResponse(
        res,
        "Pengajar berhasil dibuat, menunggu aktivasi",
        pengajar,
        null,
        201
      );
    } catch (err) {
      next(err);
    }
  };

createUser = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = await this.service.createUser(req.body);
    return successResponse(
      res,
      "User dibuat, menunggu aktivasi",
      { email: user.email, token: user.activationToken },
      null,
      201
    );
  } catch (e) {
    next(e);
  }
};

}
