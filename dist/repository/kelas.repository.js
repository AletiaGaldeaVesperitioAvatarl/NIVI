export class KelasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL KELAS
    getAll = async () => {
        return this.prisma.kelas.findMany({
            include: {
                santri: true,
                pengajar: true,
                absensi: true,
                izin: true,
                tugas: true,
            }
        });
    };
    // GET KELAS BY ID
    getById = async (id) => {
        return this.prisma.kelas.findFirst({
            where: { id },
            include: {
                pengajar: {
                    select: {
                        id: true,
                        email: true,
                        profiles: true,
                    },
                },
                santri: {
                    select: {
                        id: true,
                        email: true,
                        profiles: true,
                    },
                },
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
    // repository/kelas.repository.ts
    assignPengajar = async (kelasId, pengajarId) => {
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: {
                    connect: { id: pengajarId },
                },
            },
            include: {
                pengajar: true,
                santri: true,
            },
        });
    };
}
//# sourceMappingURL=kelas.repository.js.map