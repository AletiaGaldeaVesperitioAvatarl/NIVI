import { Request, Response } from "express";
import { DashboardService } from "../service/dashboard.service";
import { successResponse } from "../utils/response";

export class DashboardController {
  constructor(private service: DashboardService) {}

  getPengajarDashboard = async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      const pengajarId = req.user.id;

      const data = await this.service.getDashboardPengajar(pengajarId);

      res.json(data);
    } catch (err) {
      res.status(500).json({
        message: "Gagal mengambil dashboard pengajar",
      });
    }
  };
// ====================================================
  getDashboard = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id);

    const data = await this.service.getDashboard(userId);

    return successResponse(res, "Dashboard berhasil diambil", data);
  };
}


