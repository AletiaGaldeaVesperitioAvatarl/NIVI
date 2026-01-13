import { PrismaClient, Notification } from "../../dist/generated";

export class NotificationRepository {
  constructor(private prisma: PrismaClient) {}

  create = async (data: {
    userId: number;
    title: string;
    message: string;
    level: "warning" | "critical";
  }): Promise<Notification> => {
    return this.prisma.notification.create({
      data,
    });
  };

  getByUser = async (userId: number): Promise<Notification[]> => {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  };

  markAsRead = async (id: number): Promise<Notification> => {
    return this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  };
}


