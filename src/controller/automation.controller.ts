import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";

export class AutomationController {
  constructor(private absensiService: AbsensiService) {}

  generateAlpha = async (_req: Request, res: Response) => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() - 1);
    targetDate.setHours(0, 0, 0, 0);

    await this.absensiService.generateAlphaForAll(targetDate);

    return res.json({
      message: "Generate alpha harian selesai",
      date: targetDate.toISOString(),
    });
  };
}
