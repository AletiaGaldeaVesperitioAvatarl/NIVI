export class MataPelajaranRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // CREATE
    create = async (data) => {
        return this.prisma.mataPelajaran.create({ data });
    };
    // GET ALL
    getAll = async () => {
        return this.prisma.mataPelajaran.findMany({
            orderBy: { createdAt: "desc" },
        });
    };
    // GET BY ID
    getById = async (id) => {
        return this.prisma.mataPelajaran.findUnique({
            where: { id },
            include: {
                tugas: true, // 🔥 lihat tugas dalam mapel
            },
        });
    };
    // UPDATE
    update = async (id, data) => {
        return this.prisma.mataPelajaran.update({
            where: { id },
            data,
        });
    };
    // DELETE
    delete = async (id) => {
        return this.prisma.mataPelajaran.delete({
            where: { id },
        });
    };
}
//# sourceMappingURL=mataPelajaran.repository.js.map