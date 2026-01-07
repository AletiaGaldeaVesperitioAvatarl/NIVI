import { PrismaClient, Profile } from "../../dist/generated";


export class ProfileRepository {
  constructor(private prisma: PrismaClient) {}

  // GET PROFILE BY USER ID
  findByUserId = async (userId: number): Promise<Profile | null> => {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  };

  // CREATE PROFILE
  create = async (data: {
    userId: number;
    namaLengkap: string;
    noHp?: string;
    alamat?: string;
    fotoUrl?: string;
    tanggalLahir?: Date;
    jenisKelamin?: string;
  }): Promise<Profile> => {
    return this.prisma.profile.create({
      data,
    });
  };

  // UPDATE PROFILE
  updateByUserId = async (
    userId: number,
    data: Partial<Profile>
  ): Promise<Profile> => {
    return this.prisma.profile.update({
      where: { userId },
      data,
    });
  };

  // DELETE PROFILE (OPSIONAL, JARANG DIPAKE)
  deleteByUserId = async (userId: number): Promise<Profile> => {
    return this.prisma.profile.delete({
      where: { userId },
    });
  };
}
