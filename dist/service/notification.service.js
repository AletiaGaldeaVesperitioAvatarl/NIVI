export class NotificationService {
    notificationRepo;
    constructor(notificationRepo) {
        this.notificationRepo = notificationRepo;
    }
    createWarning = async (userId, alpha, persentaseHadir) => {
        let level = "warning";
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
    getMyNotifications = async (userId) => {
        return this.notificationRepo.getByUser(userId);
    };
    readNotification = async (id) => {
        return this.notificationRepo.markAsRead(id);
    };
}
//# sourceMappingURL=notification.service.js.map