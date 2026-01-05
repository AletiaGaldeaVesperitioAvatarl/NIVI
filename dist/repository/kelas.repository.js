export class KelasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL KELAS
    getAll = async () => {
        return this.prisma.kelas.findMany({
            include: {
                users: true,
                absensi: true,
                izin: true,
                tugas: true,
            },
        });
    };
    // GET KELAS BY ID
    getById = async (id) => {
        return this.prisma.kelas.findFirst({
            where: { id },
            include: {
                users: true,
                absensi: true,
                izin: true,
                tugas: true,
            },
        });
    };
    // CREATE NEW KELAS
    create = async (data) => {
        return this.prisma.kelas.create({
            data,
        });
    };
    // UPDATE KELAS
    update = async (id, data) => {
        return this.prisma.kelas.update({
            where: { id },
            data,
        });
    };
    // DELETE KELAS
    delete = async (id) => {
        return this.prisma.kelas.delete({
            where: { id },
        });
    };
}
//# sourceMappingURL=kelas.repository.js.map