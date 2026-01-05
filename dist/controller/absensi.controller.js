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
    // CREATE ABSENSI
    create = async (req, res) => {
        const { userId, kelasId, tanggal, status } = req.body;
        const absensi = await this.absensiService.createAbsensi({
            userId,
            kelasId,
            tanggal: new Date(tanggal),
            status
        });
        successResponse(res, "Absensi berhasil dibuat", absensi, null, 201);
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
}
//# sourceMappingURL=absensi.controller.js.map
