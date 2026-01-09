import { Request, Response } from "express";
import { ProfileService } from "../service/profile.service";
import { successResponse } from "../utils/response";

export class ProfileController {
  constructor(private profileService: ProfileService) {}

  // ======================
  // GET /profile/me
  // ======================
getMyProfile = async (req: Request, res: Response) => {
  const userId = req.user!.id;

  const profile = await this.profileService.getProfileByUserId(userId);

  successResponse(res, "Profile berhasil diambil", {
    user: req.user,
    profile,
  });
};

// ======================
// GET /profile/user/:userId (ADMIN)
// ======================
getProfileByUserId = async (req: Request, res: Response) => {
  const userId = Number(req.params.userId);

  const profile = await this.profileService.getProfileByUserId(userId);

  if (!profile) {
    return successResponse(
      res,
      "Profile tidak ditemukan",
      null,
      null,
      404
    );
  }

  successResponse(res, "Profile user berhasil diambil", profile);
};

  // ======================
  // POST /profile
  // ======================
  createProfile = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    
    const profile = await this.profileService.createProfile({
      userId,
      namaLengkap: req.body.namaLengkap,
      noHp: req.body.noHp,
      alamat: req.body.alamat,
      fotoUrl: req.body.fotoUrl,
      tanggalLahir: req.body.tanggalLahir,
      
      jenisKelamin: req.body.jenisKelamin,
    });

    successResponse(
      res,
      "Profile berhasil dibuat",
      profile,
      null,
      201
    );
  };

  // PUT /profile
  updateProfile = async (req: Request, res: Response) => {
    const userId = req.user!.id

    const profile = await this.profileService.updateProfile(userId, {
  namaLengkap: req.body.namaLengkap,
  noHp: req.body.noHp ?? null,
  alamat: req.body.alamat ?? null,
  fotoUrl: req.body.fotoUrl ?? null,
  tanggalLahir: req.body.tanggalLahir
    ? new Date(req.body.tanggalLahir)
    : null,
  jenisKelamin: req.body.jenisKelamin ?? null,
});

    successResponse(res, "Profile berhasil diupdate", profile);
  };

    // DELETE /profile
  
  deleteProfile = async (req: Request, res: Response) => {
    const userId = Number(req.user!.id);

    await this.profileService.deletedProfile(userId);

    successResponse(res, "Profile berhasil dihapus", null);
  };

    upsertMe = async (req: Request, res: Response) => {
      if (!req.user?.id) {
        throw new Error("User Id tidak ditemukan!")
      }
    const userId = req.user.id;

    const profile = await this.profileService.upsertProfile(
      userId,
      req.body
    );

    return res.json({
      success: true,
      message: "Profil berhasil disimpan",
      data: {
        user: req.user,
        profile,
      },
    });
  };

    getMe = async (req: Request, res: Response) => {
       if (!req.user?.id) {
        throw new Error("User Id tidak ditemukan!")
      }
    const userId = req.user.id;

    const profile = await this.profileService.getProfileByUserId(userId);

    return res.json({
      success: true,
      data: {
        user: req.user,
        profile,
      },
    });
  };
}
