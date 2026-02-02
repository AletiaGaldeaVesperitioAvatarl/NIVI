export class ProfileRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET PROFILE BY USER ID
    findByUserId = async (userId) => {
        return this.prisma.profile.findUnique({
            where: { userId },
        });
    };
    // CREATE PROFILE
    create = async (data) => {
        return this.prisma.profile.create({
            data,
        });
    };
    // UPDATE PROFILE
    updateByUserId = async (userId, data) => {
        const upsertData = {
            namaLengkap: data.namaLengkap ?? "",
            noHp: data.noHp ?? null,
            alamat: data.alamat ?? null,
            tanggalLahir: data.tanggalLahir ?? null,
            jenisKelamin: data.jenisKelamin ?? null,
        };
        if (data.fotoUrl !== undefined) {
            upsertData.fotoUrl = data.fotoUrl;
        }
        return this.prisma.profile.upsert({
            where: { userId },
            update: upsertData,
            create: {
                userId,
                ...upsertData,
            },
        });
    };
    // DELETE PROFILE (OPSIONAL, JARANG DIPAKE)
    deleteByUserId = async (userId) => {
        return this.prisma.profile.delete({
            where: { userId },
        });
    };
}
//# sourceMappingURL=profile.repository.js.map