import { Request, Response } from "express";
import { TugasService } from "../service/tugas.service";
import { successResponse } from "../utils/response";

export class TugasController {
  constructor(private tugasService: TugasService) {}

  // GET ALL TUGAS
  getAll = async (_req: Request, res: Response) => {
    const tugas = await this.tugasService.getAll();
    successResponse(res, "Semua tugas berhasil diambil", tugas);
  };

  // GET TUGAS BY ID
  getById = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const tugas = await this.tugasService.getById(id);
    if (!tugas) throw new Error("Tugas tidak ditemukan!");
    successResponse(res, "Tugas berhasil ditemukan", tugas);
  };

  // CREATE TUGAS
  create = async (req: Request, res: Response) => {
    const { kelasId, title, description, deadline, createdBy } = req.body;
    const tugas = await this.tugasService.createTugas({
      kelasId,
      title,
      description,
      deadline: new Date(deadline),
      createdBy
    });
    successResponse(res, "Tugas berhasil dibuat", tugas, null, 201);
  };

  // UPDATE TUGAS
  update = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const data = req.body;
    const tugas = await this.tugasService.updateTugas(id, data);
    successResponse(res, "Tugas berhasil diperbarui", tugas);
  };
  
  // DELETE TUGAS
  delete = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const tugas = await this.tugasService.deleteTugas(id);
    successResponse(res, "Tugas berhasil dihapus", tugas);
  };

getForSantri = async (req: any, res: Response) => {
  const userId = req.user.id;

  const tasks = await this.tugasService.getTasksForSantri(userId);

  res.json({
    success: true,
    data: tasks,
  });
};


}
