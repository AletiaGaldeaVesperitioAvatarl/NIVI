import { Notification } from "../../dist/generated";
import { NotificationRepository } from "../repository/notification.repository";

export class NotificationService {
  constructor(private notificationRepo: NotificationRepository) {}

  createWarning = async (
    userId: number,
    alpha: number,
    persentaseHadir: number,
  ) => {
    let level: "warning" | "critical" = "warning";

    if (alpha >= 8 || persentaseHadir < 60) {
      level = "critical";
    }

    return this.notificationRepo.create({
      userId,
      title: "Peringatan Kehadiran",
      message: `Alpha: ${alpha} kali, Kehadiran: ${persentaseHadir}%`,
      level,
    });
  };

  getMyNotifications = async (userId: number): Promise<Notification[]> => {
    return this.notificationRepo.getByUser(userId);
  };

  readNotification = async (id: number) => {
    return this.notificationRepo.markAsRead(id);
  };
}
