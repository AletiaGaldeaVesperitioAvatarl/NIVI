import { successResponse } from "../utils/response.js";
export class TugasController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAll = async (_, res) => {
        const data = await this.service.getAll();
        successResponse(res, "Semua tugas", data);
    };
    getById = async (req, res) => {
        const data = await this.service.getById(Number(req.params.id));
        successResponse(res, "Detail tugas", data);
    };
    create = async (req, res) => {
        const { kelasId, mataPelajaranId, title, description, deadline } = req.body;
        const data = await this.service.create({
            kelasId: Number(kelasId),
            mataPelajaranId: Number(mataPelajaranId),
            title,
            description,
            deadline: new Date(deadline),
            createdBy: req.user.id,
        });
        successResponse(res, "Tugas berhasil dibuat", data, null, 201);
    };
    update = async (req, res) => {
        const data = await this.service.update(Number(req.params.id), req.body);
        successResponse(res, "Tugas berhasil diperbarui", data);
    };
    delete = async (req, res) => {
        const data = await this.service.delete(Number(req.params.id));
        successResponse(res, "Tugas berhasil dihapus", data);
    };
    getForSantri = async (req, res) => {
        const data = await this.service.getForSantri(req.user.id);
        successResponse(res, "Tugas santri", data);
    };
}
//# sourceMappingURL=tugas.controller.js.map
