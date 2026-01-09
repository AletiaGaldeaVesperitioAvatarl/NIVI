import type { Request, Response } from "express";
import * as service from "../service/pengajar.service";
import { successResponse } from "../utils/response";

export class PengajarController {
    constructor(private prisma: service.PengajarService){}
  create = async (req: Request, res: Response) => {
          const result = await this.prisma.createPengajar(req.body);

          successResponse(
            res,
            "Pengajar berhasil dibuat!",
            result
          )
  };
}