export class TugasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL TUGAS
    getAll = async () => {
        return this.prisma.tugas.findMany({
            include: {
                kelas: true, // relasi ke Kelas
                creator: true, // relasi ke User yang buat tugas
                submission: true, // relasi ke submission
                nilai: true // relasi ke nilai
            },
        });
    };
    // GET TUGAS BY ID
    getById = async (id) => {
        return this.prisma.tugas.findFirst({
            where: { id },
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            },
        });
    };
    // CREATE NEW TUGAS
    create = async (data) => {
        return this.prisma.tugas.create({
            data,
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            }
        });
    };
    // UPDATE TUGAS
    update = async (id, data) => {
        return this.prisma.tugas.update({
            where: { id },
            data,
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            }
        });
    };
    // DELETE TUGAS
    delete = async (id) => {
        return this.prisma.tugas.delete({
            where: { id },
        });
    };
}
//# sourceMappingURL=tugas.repository.js.map