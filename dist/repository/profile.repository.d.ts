import { PrismaClient, Profile } from "../../dist/generated/index.js";
export declare class ProfileRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByUserId: (userId: number) => Promise<Profile | null>;
    create: (data: {
        userId: number;
        namaLengkap: string;
        noHp?: string;
        alamat?: string;
        fotoUrl?: string;
        tanggalLahir?: Date;
        jenisKelamin?: string;
    }) => Promise<Profile>;
    updateByUserId: (userId: number, data: Partial<Profile>) => Promise<{
        id: number;
        userId: number;
        createdAt: Date;
        namaLengkap: string;
        noHp: string | null;
        alamat: string | null;
        fotoUrl: string | null;
        tanggalLahir: Date | null;
        jenisKelamin: string | null;
        updatedAt: Date;
    }>;
    deleteByUserId: (userId: number) => Promise<Profile>;
}
//# sourceMappingURL=profile.repository.d.ts.map
