export class DashboardController {
    service;
    constructor(service) {
        this.service = service;
    }
    getPengajarDashboard = async (req, res) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    message: "Unauthorized",
                });
            }
            const pengajarId = req.user.id;
            const data = await this.service.getDashboardPengajar(pengajarId);
            res.json(data);
        }
        catch (err) {
            res.status(500).json({
                message: "Gagal mengambil dashboard pengajar",
            });
        }
    };
}
//# sourceMappingURL=p-dashboard.controller.js.map