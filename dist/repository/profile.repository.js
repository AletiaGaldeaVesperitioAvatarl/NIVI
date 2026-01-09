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
        return this.prisma.profile.update({
            where: { userId },
            data,
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