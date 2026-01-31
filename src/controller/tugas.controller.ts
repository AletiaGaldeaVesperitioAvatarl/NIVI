import { Request, Response } from "express";
import { TugasService } from "../service/tugas.service";
import { errorResponse, successResponse } from "../utils/response";
import { io } from "../socket";


export class TugasController {
  constructor(private service: TugasService) {}

  getAll = async (_: Request, res: Response) => {
    const data = await this.service.getAll();
    successResponse(res, "Semua tugas", data);
  };

getById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'ID tidak valid' });
  }

  const data = await this.service.getById(id);
  successResponse(res, "Detail tugas", data);
};


create = async (req: any, res: Response) => {
  const {
    kelasId,
    mataPelajaranId,
    mapelId,
    title,
    description,
    deadline,
  } = req.body;

  const data = await this.service.create({
    kelasId: Number(kelasId),
    mataPelajaranId: Number(mataPelajaranId ?? mapelId),
    title,
    description,
    deadline: new Date(deadline),
    createdBy: req.user.id,
  });

  // 🔥 REALTIME: kirim ke semua member kelas
  io.to(`kelas-${kelasId}`).emit("tugas-created", data);

  successResponse(res, "Tugas berhasil dibuat", data, null, 201);
};

update = async (req: Request, res: Response) => {
  const data = await this.service.update(
    Number(req.params.id),
    req.body
  );

  // 🔥 kirim update ke kelas terkait
  io.to(`kelas-${data.kelasId}`).emit("tugas-updated", data);

  successResponse(res, "Tugas berhasil diperbarui", data);
};


delete = async (req: Request, res: Response) => {
  const data = await this.service.delete(Number(req.params.id));

  io.to(`kelas-${data.kelasId}`).emit("tugas-deleted", {
    id: data.id,
  });

  successResponse(res, "Tugas berhasil dihapus", data);
};


  getForSantri = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new Error("user tidak ditemukan")
    }
    const data = await this.service.getForSantri(req.user.id);

    successResponse(res, "Tugas santri", data);
  };

    archiveExpiredForSantri = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new Error("User tidak ditemukan");
    }

    const tugasId = Number(req.params.id);

    await this.service.archiveExpiredForSantri(
      req.user.id,
      tugasId
    );

    successResponse(res, "Tugas berhasil diarsipkan");
  };

  // 🔹 ambil tugas arsip santri
  getArchivedForSantri = async (req: Request, res: Response) => {
    if (!req.user) {
      throw new Error("User tidak ditemukan");
    }

    const data = await this.service.getArchivedForSantri(
      req.user.id
    );

    successResponse(res, "Daftar tugas arsip santri", data);
  };
  
}
