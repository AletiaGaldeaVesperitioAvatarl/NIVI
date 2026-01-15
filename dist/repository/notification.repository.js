export class NotificationRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create = async (data) => {
        return this.prisma.notification.create({
            data,
        });
    };
    getByUser = async (userId) => {
        return this.prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: "desc" },
        });
    };
    markAsRead = async (id) => {
        return this.prisma.notification.update({
            where: { id },
            data: { isRead: true },
        });
    };
}
//# sourceMappingURL=notification.repository.js.map