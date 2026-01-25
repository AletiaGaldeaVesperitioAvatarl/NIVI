import { Request, Response } from "express";
import { KelasService } from "../service/kelas.service";
import { successResponse } from "../utils/response";
import { io } from "../socket";

export class KelasController {
  constructor(private kelasService: KelasService) {}

  // GET ALL KELAS
  getAll = async (_req: Request, res: Response) => {
    const kelas = await this.kelasService.getAll();
    successResponse(res, "Semua kelas berhasil diambil", kelas);
  };

  // GET KELAS BY ID
  getById = async (req: Request, res: Response) => {
    if (!req.params.id) throw new Error("Parameter id tidak ditemukan!");
    const id = Number(req.params.id);
    const kelas = await this.kelasService.getById(id);
    if (!kelas) throw new Error("Kelas tidak ditemukan!");
    successResponse(res, "Kelas berhasil ditemukan", kelas);
  };

  // CREATE KELAS
create = async (req: Request, res: Response) => {
  const { namaKelas, deskripsi } = req.body;
  const kelas = await this.kelasService.createKelas({ namaKelas, deskripsi });

  // 🔥 EMIT REALTIME
  io.emit("kelas-created", kelas);

  successResponse(res, "Kelas berhasil dibuat", kelas, null, 201);
};


  // UPDATE KELAS
update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;

  const kelas = await this.kelasService.updateKelas(id, data);

  io.emit("kelas-updated", kelas);

  successResponse(res, "Kelas berhasil diperbarui", kelas);
};


  // DELETE KELAS
delete = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const kelas = await this.kelasService.deleteKelas(id);

  io.emit("kelas-deleted", { id });

  successResponse(res, "Kelas berhasil dihapus", kelas);
};

assignPengajar = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.id);
  const { pengajarIds } = req.body;

  const kelas = await this.kelasService.assignPengajarKeKelas(
    kelasId,
    pengajarIds
  );

  io.to(`kelas-${kelasId}`).emit("kelas-pengajar-updated", kelas);

  successResponse(res, "Pengajar berhasil ditambahkan ke kelas", kelas);
};


setPengajar = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.id);
  const { pengajarIds } = req.body;

  const kelas = await this.kelasService.setPengajarKelas(
    kelasId,
    pengajarIds
  );

  io.to(`kelas-${kelasId}`).emit("kelas-pengajar-updated", kelas);

  successResponse(res, "Pengajar kelas berhasil diperbarui", kelas);
};

getKelasByPengajar = async (req: Request, res:Response) => {
  if (!req.user) {
    throw new Error ("User tidak ditemukan!")
  }
  const kelas = await this.kelasService.getKelasByPengajar(req.user.id);
  successResponse(
    res,
    "Kelas berhasil diambil",
    kelas
  )
}

}
