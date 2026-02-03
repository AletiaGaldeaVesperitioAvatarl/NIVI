import { Request, Response } from "express";
import { KelasService } from "../service/kelas.service";
import { successResponse, errorResponse } from "../utils/response";

export class KelasController {
  constructor(private kelasService: KelasService) {}

  getAllKelas = async (_req:Request, res:Response) =>{
    try {
      const kelas = await this.kelasService.getAllKelas()
      successResponse(
        res,
        "Semua kelas berhasil diambil!",
        kelas
      )
    } catch (err:any) {
      errorResponse(
        res,
        err.message
      )
    }
  }

  // GET ALL KELAS
  getAll = async (_req: Request, res: Response) => {
    try {
      const kelas = await this.kelasService.getAll();
      successResponse(res, "Semua kelas berhasil diambil", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

    getAllSantri = async (_req: Request, res: Response) => {
    try {
      const kelas = await this.kelasService.getAllSantri();
      successResponse(res, "Semua kelas berhasil diambil", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getAllSantriByAdmin = async (_req:Request, res:Response) =>{
    try {
      const kelas = await this.kelasService.getAllSantriByAdmin()
      successResponse(
        res,
        "Semua kelas berhasil diambil",
        kelas
      )
    } catch (err:any) {
      errorResponse(
        res,
        err.message
      )
    }
  }

  // GET KELAS BY ID
  getById = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
      const id = Number(req.params.id);
      const kelas = await this.kelasService.getById(id);
      if (!kelas) throw new Error("Kelas tidak ditemukan!");
      successResponse(res, "Kelas berhasil ditemukan", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // CREATE KELAS
  create = async (req: Request, res: Response) => {
    try {
      const { namaKelas, deskripsi } = req.body;
      const kelas = await this.kelasService.createKelas({ namaKelas, deskripsi });

      // 🔥 REALTIME: global emit
      successResponse(res, "Kelas berhasil dibuat", kelas, null, 201);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // UPDATE KELAS
  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = req.body;

      const kelas = await this.kelasService.updateKelas(id, data);

      // 🔥 REALTIME: global emit

      successResponse(res, "Kelas berhasil diperbarui", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // DELETE KELAS
  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const kelas = await this.kelasService.deleteKelas(id);

      // 🔥 REALTIME: global emit

      successResponse(res, "Kelas berhasil dihapus", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // ASSIGN PENGAJAR KE KELAS
  assignPengajar = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.id);
      const { pengajarIds } = req.body;

      const kelas = await this.kelasService.assignPengajarKeKelas(kelasId, pengajarIds);

      // 🔥 REALTIME: emit ke room kelas agar pengajar/anggota kelas yang join tahu update

      successResponse(res, "Pengajar berhasil ditambahkan ke kelas", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // SET PENGAJAR KELAS (replace)
  setPengajar = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.id);
      const { pengajarIds } = req.body;

      const kelas = await this.kelasService.setPengajarKelas(kelasId, pengajarIds);


      successResponse(res, "Pengajar kelas berhasil diperbarui", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  // GET KELAS BY PENGAJAR (untuk join room FE)
  getKelasByPengajar = async (req: Request, res: Response) => {
    try {
      if (!req.user) throw new Error("User tidak ditemukan!");
      const kelas = await this.kelasService.getKelasByPengajar(req.user.id);

      // 🔥 opsional: emit info join kelas (frontend nanti bisa join room)
      // io.to(`user-${req.user.id}`).emit("user-kelas", kelas);

      successResponse(res, "Kelas berhasil diambil", kelas);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

   getAllByPengajar = async(req: Request, res: Response) => {
    try {
      if (!req.user) {
        throw new Error("user tidak ditemukan!")
      }
      const pengajarId = req.user.id; // pastikan authenticate middleware sudah jalan
      const kelas = await this.kelasService.getKelasByPengajar(pengajarId);
      return successResponse(
        res,
        "Kelas berhasil diambil!",
         kelas);
    } catch (error: any) {
      return errorResponse(res, error.message || "Gagal mengambil kelas", 500);
    }
  }

}
