import { Request, Response } from "express";
import { NotificationService } from "../service/notification.service";
import { successResponse } from "../utils/response";

export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  getMyNotifications = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id);

    const data =
      await this.notificationService.getMyNotifications(userId);

    successResponse(res, "Notifikasi berhasil diambil", data);
  };

  markAsRead = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const data =
      await this.notificationService.readNotification(id);

    successResponse(res, "Notifikasi ditandai dibaca", data);
  };
}
