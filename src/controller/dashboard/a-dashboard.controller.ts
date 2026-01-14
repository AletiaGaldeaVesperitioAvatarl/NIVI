import type { Request, Response } from "express";
import { AdminDashboardService } from "../../service/dashboard/a-dashboard.service";

export class AdminDashboardController {
  constructor(private service: AdminDashboardService) {}

  getAdminDashboard = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getDashboardAdmin();
      res.json(data);
    } catch {
      res.status(500).json({
        message: "Gagal mengambil dashboard admin",
      });
    }
  };
}
