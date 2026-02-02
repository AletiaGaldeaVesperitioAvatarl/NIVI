export class AutomationController {
    absensiService;
    constructor(absensiService) {
        this.absensiService = absensiService;
    }
    generateAlpha = async (_req, res) => {
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
//# sourceMappingURL=automation.controller.js.map