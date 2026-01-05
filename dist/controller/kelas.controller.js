import { successResponse } from "../utils/response.js";
export class KelasController {
    kelasService;
    constructor(kelasService) {
        this.kelasService = kelasService;
    }
    // GET ALL KELAS
    getAll = async (_req, res) => {
        const kelas = await this.kelasService.getAll();
        successResponse(res, "Semua kelas berhasil diambil", kelas);
    };
    // GET KELAS BY ID
    getById = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const kelas = await this.kelasService.getById(id);
        if (!kelas)
            throw new Error("Kelas tidak ditemukan!");
        successResponse(res, "Kelas berhasil ditemukan", kelas);
    };
    // CREATE KELAS
    create = async (req, res) => {
        const { namaKelas, deskripsi } = req.body;
        const kelas = await this.kelasService.createKelas({ namaKelas, deskripsi });
        successResponse(res, "Kelas berhasil dibuat", kelas, null, 201);
    };
    // UPDATE KELAS
    update = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const data = req.body;
        const kelas = await this.kelasService.updateKelas(id, data);
        successResponse(res, "Kelas berhasil diperbarui", kelas);
    };
    // DELETE KELAS
    delete = async (req, res) => {
        if (!req.params.id)
            throw new Error("Parameter id tidak ditemukan!");
        const id = Number(req.params.id);
        const kelas = await this.kelasService.deleteKelas(id);
        successResponse(res, "Kelas berhasil dihapus", kelas);
    };
}
//# sourceMappingURL=kelas.controller.js.map
