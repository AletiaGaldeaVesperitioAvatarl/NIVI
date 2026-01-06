import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";
import { successResponse } from "../utils/response";

export class AbsensiController {
  constructor(private absensiService: AbsensiService) {}

  // GET ALL ABSENSI
  getAll = async (_req: Request, res: Response) => {
    const absensi = await this.absensiService.getAll();
    successResponse(res, "Semua absensi berhasil diambil", absensi);
  };

  // GET ABSENSI BY ID
  getById = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const absensi = await this.absensiService.getById(id);
    if (!absensi) throw new Error("Absensi tidak ditemukan!");
    successResponse(res, "Absensi berhasil ditemukan", absensi);
  };

  // GET ABSENSI BY USER ID
  getByUserId = async (req: Request, res: Response) => {
    if (!req.params.userId) throw new Error("Parameter userId tidak ditemukan!");
    const userId = Number(req.params.userId);
    const absensi = await this.absensiService.getByUserId(userId);
    successResponse(res, `Absensi user ${userId} berhasil diambil`, absensi);
  };

  // CREATE ABSENSI
  // POST absen hadir (AUTO)
  absen = async (req: Request, res: Response) => {
    const numId = req.user!.id;
    const userId = parseInt(numId)
    const kelasId = req.user!.kelasId;

    if (!kelasId) throw new Error("User belum punya kelas");

    const absensi = await this.absensiService.absenHadir(userId, kelasId);

    successResponse(res, "Absen berhasil", absensi, null, 201);
  };

  // UPDATE ABSENSI
  update = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const data = req.body;
    const absensi = await this.absensiService.updateAbsensi(id, data);
    successResponse(res, "Absensi berhasil diperbarui", absensi);
  };

  // DELETE ABSENSI
  delete = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const absensi = await this.absensiService.deleteAbsensi(id);
    successResponse(res, "Absensi berhasil dihapus", absensi);
  };

    getMyTodayAbsensi = async (req: Request, res: Response) => {
    const userId = req.user!.id;

    const data = await this.absensiService.getTodayByUser(Number(userId));

    successResponse(res, "Absensi hari ini", data);
  };

}
