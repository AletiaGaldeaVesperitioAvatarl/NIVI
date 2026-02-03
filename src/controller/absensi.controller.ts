import { Request, Response } from "express";
import { AbsensiService } from "../service/absensi.service";
import { StatusAbsensi } from "../../dist/generated";
import { successResponse, errorResponse } from "../utils/response";
import { UserService } from "../service/user.service";

export class AbsensiController {
  constructor(
    private service: AbsensiService,
    private userService: UserService,
  ) {}

  // Tambahkan di AbsensiController.ts
  getAll = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getAll();
      successResponse(res, "Semua absensi", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getByUserId = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.id);
      const data = await this.service.getByUserId(userId);
      successResponse(res, `Absensi user ${userId}`, data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

absen = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.user!.id);
    const { status, jadwalId } = req.body;

    // 1️⃣ Validasi status
    if (!Object.values(StatusAbsensi).includes(status as StatusAbsensi)) {
      throw new Error("Status tidak valid");
    }

    // 2️⃣ Ambil user
    const user = await this.userService.getById(userId);
    if (!user?.kelasId) {
      throw new Error("User belum punya kelas");
    }

    // 3️⃣ Pastikan kelasId selalu array
    const kelasIds: number[] = Array.isArray(user.kelasId)
      ? user.kelasId
      : [user.kelasId];

    if (kelasIds.length === 0) {
      throw new Error("User belum punya kelas");
    }

    // 4️⃣ Loop absen untuk semua kelas
    const dataResults = [];
    const now = new Date();

    for (const kelasId of kelasIds) {
      let absensi;

      // 4a️⃣ Jika status hadir → pakai absenHadir yang divalidasi jadwal
      if (status === StatusAbsensi.hadir) {
        absensi = await this.service.absenHadir(userId, kelasId);
      } else if (status === StatusAbsensi.izin) {
        // 4b️⃣ Jika status izin → buat izin sementara
        absensi = await this.service.absenIzinDariPersetujuan(
          userId,
          kelasId,
          now
        );
      } else {
        // 4c️⃣ fallback, alpha tidak bisa manual
        throw new Error("Hanya bisa absen 'hadir' atau 'izin' secara manual");
      }

      dataResults.push(absensi);

      // 🔔 Emit ke user-specific room (optional, misal socket.io)
      // this.socketService.emitToUser(userId, "absen:update", absensi);
    }

    successResponse(res, "Absen berhasil", dataResults, null, 201);
  } catch (err: any) {
    errorResponse(res, err.message);
  }
};




  getMyTodayAbsensi = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.user!.id);
      const data = await this.service.getTodayByUser(userId);
      successResponse(res, "Absensi hari ini", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;

      const data = await this.service.updateAbsensi(id, {
        status: status as StatusAbsensi,
      });

      successResponse(res, "Absensi diperbarui", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await this.service.deleteAbsensi(id);
      successResponse(res, "Absensi dihapus", data);
    } catch (err: any) {
      errorResponse(res, err.message);
    }
  };

  getByKelas = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.kelasId);
      const page = Number(req.query.page ?? 1);
      const limit = Number(req.query.limit ?? 20);
      const sort = req.query.sort === "asc" ? "asc" : "desc";

      const result = await this.service.getByKelas({
        kelasId,
        page,
        limit,
        sort,
      });

      res.json({
        success: true,
        ...result,
      });
    } catch (err: any) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };


  rekapBulananPerSantri = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const { bulan } = req.query;

    if (!bulan) {
      throw new Error("Query bulan wajib (YYYY-MM)");
    }

    const data =
      await this.service.rekapBulananPerSantri(
        userId,
        String(bulan)
      );

    res.json({
      success: true,
      message: "Rekap bulanan santri berhasil",
      data,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
rekapMingguanPerSantri = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const { minggu } = req.query;

    if (!minggu) {
      throw new Error("Query minggu wajib (YYYY-MM-DD)");
    }

    const data =
      await this.service.rekapMingguanPerSantri(
        userId,
        String(minggu)
      );

    res.json({
      message: "Rekap mingguan santri berhasil",
      data,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

  getRekapBulanan = async (req: Request, res: Response) => {
    try {
      const kelasId = Number(req.params.kelasId);
      const bulan = Number(req.query.bulan);
      const tahun = Number(req.query.tahun);

      if (!kelasId || !bulan || !tahun) {
        return res.status(400).json({ message: "Kelas, bulan, dan tahun wajib diisi" });
      }

      const rekap = await this.service.getRekapBulanan(kelasId, bulan, tahun);
      return res.json(rekap);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Terjadi kesalahan server" });
    }
  }


}
