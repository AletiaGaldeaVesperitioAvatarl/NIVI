import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";
import { errorResponse, successResponse } from "../utils/response";

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
    const userId = Number(req.user!.id);
    const data = await this.absensiService.getTodayByUser(userId);
    successResponse(res, "Absensi hari ini", data);
  };

  absen = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id)
    const kelasId = req.user!.kelasId;
    const { status } = req.body

    if (!kelasId) throw new Error("User belum punya kelas");

    const absensi = await this.absensiService.absenHadir(userId, kelasId, status);
    successResponse(res, "Absen berhasil", absensi, null, 201);
  };
    autoAlpha = async (_req: Request, res: Response) => {
    try {
      const total = await this.absensiService.autoAlpha();

      return successResponse(
        res,
        "Auto alpha berhasil dijalankan",
        { totalAlpha: total }
      );
    } catch (err: any) {
      return errorResponse(res, err.message);
    }
  };

  // rekapbulanansantri
  rekapBulananPerKelas = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.kelasId);
  const { bulan } = req.query;

  if (!bulan) {
    throw new Error("Query bulan wajib (format: YYYY-MM)");
  }

  const data =
    await this.absensiService.rekapBulananPerKelas(
      kelasId,
      String(bulan)
    );

  successResponse(
    res,
    "Rekap absensi per kelas berhasil",
    data
  );
};

getByKelasAndTanggal = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.kelasId);
  if (!req.params.tanggal) {
    throw new Error("tanggal tidak ditemukan!")
  }
  const tanggal = new Date(req.params.tanggal);

  const data =
    await this.absensiService.getByKelasAndTanggal(
      kelasId,
      tanggal
    );

  successResponse(res, "Absensi per hari", data);
};

createAbsensiPerHari = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.kelasId);
  if (!req.params.tanggal) {
    throw new Error("tanggal tidak ditemukan!")
  }
  const tanggal = new Date(req.params.tanggal);
  const payload = req.body; 
  // [{ userId, status }]

  const result =
    await this.absensiService.createAbsensiPerHari(
      kelasId,
      tanggal,
      payload
    );

  successResponse(res, "Absensi harian berhasil dibuat", result, null, 201);
};

updateAbsensiPerTanggal = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const data =
    await this.absensiService.updateAbsensi(id, { status });

  successResponse(res, "Absensi diperbarui", data);
};

deleteAbsensiPerHari = async (req: Request, res: Response) => {
  const kelasId = Number(req.params.kelasId);
  if (!req.params.tanggal) {
    throw new Error("tanggal tidak ditemukan!")
  }
  const tanggal = new Date(req.params.tanggal);

  const total =
    await this.absensiService.deleteByKelasAndTanggal(
      kelasId,
      tanggal
    );

  successResponse(res, "Absensi harian dihapus", { total });
};

 generateBulanan = async (req: Request, res: Response) => {
  const { kelasId, bulan } = req.body;
  // bulan format: YYYY-MM

  const result =
    await this.absensiService.generateAbsensiBulanan(
      kelasId,
      bulan
    );

  successResponse(
    res,
    "Absensi bulanan berhasil dibuat",
    result
  );
};

}
