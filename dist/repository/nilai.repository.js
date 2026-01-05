export class NilaiRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL NILAI
    getAll = async () => {
        return this.prisma.nilai.findMany({
            include: {
                user: true,
                tugas: true,
            },
        });
    };
    // GET NILAI BY ID
    getById = async (id) => {
        return this.prisma.nilai.findFirst({
            where: { id },
            include: {
                user: true,
                tugas: true,
            },
        });
    };
    // GET NILAI BY USER
    getByUserId = async (userId) => {
        return this.prisma.nilai.findMany({
            where: { userId },
            include: {
                tugas: true,
            },
        });
    };
    // GET NILAI BY TUGAS
    getByTugasId = async (tugasId) => {
        return this.prisma.nilai.findMany({
            where: { tugasId },
            include: {
                user: true,
            },
        });
    };
    // CREATE NILAI
    create = async (data) => {
        return this.prisma.nilai.create({
            data,
            include: {
                user: true,
                tugas: true,
            },
        });
    };
    // UPDATE NILAI
    update = async (id, data) => {
        return this.prisma.nilai.update({
            where: { id },
            data,
            include: {
                user: true,
                tugas: true,
            },
        });
    };
    // DELETE NILAI
    delete = async (id) => {
        return this.prisma.nilai.delete({
            where: { id },
        });
    };
}
//# sourceMappingURL=nilai.repository.js.map