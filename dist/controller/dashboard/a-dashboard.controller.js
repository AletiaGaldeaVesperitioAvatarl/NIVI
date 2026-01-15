export class AdminDashboardController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAdminDashboard = async (_req, res) => {
        try {
            const data = await this.service.getDashboardAdmin();
            res.json(data);
        }
        catch {
            res.status(500).json({
                message: "Gagal mengambil dashboard admin",
            });
        }
    };
}
//# sourceMappingURL=a-dashboard.controller.js.map