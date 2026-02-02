import { Profile } from "../../dist/generated/index.js";
import { ProfileRepository } from "../repository/profile.repository.js";
export declare class ProfileService {
    private profileRepository;
    constructor(profileRepository: ProfileRepository);
    getProfileByUserId: (userId: number) => Promise<Profile | null>;
    createProfile: (data: {
        userId: number;
        namaLengkap: string;
        noHp: string;
        alamat: string;
        fotoUrl: string;
        tanggalLahir: Date;
        jenisKelamin: string;
    }) => Promise<Profile>;
    updateProfile: (userId: number, data: Partial<Profile>) => Promise<Profile>;
    deletedProfile: (userId: number) => Promise<Profile>;
}
//# sourceMappingURL=profile.service.d.ts.map
