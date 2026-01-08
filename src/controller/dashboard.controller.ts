import { Request, Response } from "express";
import { DashboardService } from "../service/dashboard.service";

export class DashboardController {
  constructor(private service: DashboardService) {}

  getPengajarDashboard = async (req: Request, res: Response) => {
    try {
      const pengajarId = req.user!.id;

      const data = await this.service.getDashboardPengajar(pengajarId);

      res.json(data);
    } catch (err) {
      res.status(500).json({
        message: "Gagal mengambil dashboard pengajar",
      });
    }
  };
}
