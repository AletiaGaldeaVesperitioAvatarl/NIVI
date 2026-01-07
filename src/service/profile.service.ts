import { Profile } from "../../dist/generated/client";
import { ProfileRepository } from "../repository/profile.repository";

export class ProfileService {
  constructor(private profileRepository: ProfileRepository) {}

  //GET PROFILE
  getProfileByUserId = async (userId: number): Promise<Profile | null> => {
    return this.profileRepository.findByUserId(userId);
  };

  // CREATE PROFILE
  createProfile = async (data: {
    userId: number;
    namaLengkap: string;
    noHp: string;
    alamat: string;
    fotoUrl: string;
    tanggalLahir: Date;
    jenisKelamin: string;
  }): Promise<Profile> => {
    return this.profileRepository.create(data);
  };

  //UPDATE PROFILE
  updateProfile = async (
    userId: number,
    data: Partial<Profile>
  ): Promise<Profile> => {
    return this.profileRepository.updateByUserId(userId, data);
  };

  //DELETE DATA
  deletedProfile = async (userId: number): Promise<Profile> => {
    return this.profileRepository.deleteByUserId(userId);
  };
}
