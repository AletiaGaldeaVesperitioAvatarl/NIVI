import { successResponse } from "../utils/response.js";
export class AbsensiController {
    absensiService;
    constructor(absensiService) {
        this.absensiService = absensiService;
    }
    // GET ALL ABSENSI
    getAll = async (_req, res) => {
        const absensi = await this.absensiService.getAll();
        successResponse(res, "Semua absensi berhasil diambil", absensi);
    };
    // GET ABSENSI BY ID
    getById = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const absensi = await this.absensiService.getById(id);
        if (!absensi)
            throw new Error("Absensi tidak ditemukan!");
        successResponse(res, "Absensi berhasil ditemukan", absensi);
    };
    // GET ABSENSI BY USER ID
    getByUserId = async (req, res) => {
        if (!req.params.userId)
            throw new Error("Parameter userId tidak ditemukan!");
        const userId = Number(req.params.userId);
        const absensi = await this.absensiService.getByUserId(userId);
        successResponse(res, `Absensi user ${userId} berhasil diambil`, absensi);
    };
    // UPDATE ABSENSI
    update = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const data = req.body;
        const absensi = await this.absensiService.updateAbsensi(id, data);
        successResponse(res, "Absensi berhasil diperbarui", absensi);
    };
    // DELETE ABSENSI
    delete = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const absensi = await this.absensiService.deleteAbsensi(id);
        successResponse(res, "Absensi berhasil dihapus", absensi);
    };
    getMyTodayAbsensi = async (req, res) => {
        const userId = Number(req.user.id);
        const data = await this.absensiService.getTodayByUser(userId);
        successResponse(res, "Absensi hari ini", data);
    };
    absen = async (req, res) => {
        const userId = Number(req.user.id);
        const kelasId = req.user.kelasId;
        const { status } = req.body;
        if (!kelasId)
            throw new Error("User belum punya kelas");
        const absensi = await this.absensiService.absenHadir(userId, kelasId, status);
        successResponse(res, "Absen berhasil", absensi, null, 201);
    };
}
//# sourceMappingURL=absensi.controller.js.map
