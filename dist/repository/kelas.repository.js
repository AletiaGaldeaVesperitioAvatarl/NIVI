export class KelasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAllKelas() {
        return this.prisma.kelas.findMany({
            include: {
                tugas: {
                    include: {
                        mataPelajaran: true,
                    },
                },
                santri: {
                    where: { isActive: true },
                    select: { id: true },
                },
            },
        });
    }
    // GET ALL KELAS
    getAll = async () => {
        return this.prisma.kelas.findMany({
            include: {
                santri: {
                    where: {
                        isActive: true
                    },
                    include: {
                        profile: {
                            select: {
                                fotoUrl: true,
                            },
                        },
                    },
                },
                pengajar: true,
                absensi: true,
                izin: true,
                tugas: true,
            },
        });
    };
    getAllSantri = async () => {
        return this.prisma.kelas.findMany({
            include: {
                santri: {
                    where: {
                        isActive: true
                    },
                    include: {
                        profile: {
                            select: {
                                fotoUrl: true,
                            },
                        },
                    },
                },
                pengajar: true,
                absensi: true,
                izin: true,
                tugas: true,
            },
        });
    };
    getAllSantriByAdmin = async () => {
        return this.prisma.kelas.findMany({
            include: {
                santri: {
                    include: {
                        profile: {
                            select: {
                                fotoUrl: true,
                            },
                        },
                    },
                },
                pengajar: true,
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
                pengajar: {
                    select: {
                        id: true,
                        email: true,
                        profile: true,
                    },
                },
                santri: {
                    select: {
                        id: true,
                        email: true,
                        profile: true,
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
    assignPengajar(kelasId, pengajarIds) {
        const ids = Array.isArray(pengajarIds) ? pengajarIds : [pengajarIds];
        // filter invalid values
        const validIds = ids.filter((id) => typeof id === "number");
        if (validIds.length === 0)
            throw new Error("Tidak ada pengajar valid untuk ditambahkan");
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: { connect: validIds.map((id) => ({ id })) },
            },
            include: { pengajar: true },
        });
    }
    setPengajar = async (kelasId, pengajarIds) => {
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: {
                    set: pengajarIds.map((id) => ({ id })),
                },
            },
            include: {
                pengajar: true,
                santri: true,
            },
        });
    };
    addPengajar = async (kelasId, pengajarId) => {
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: {
                    connect: { id: pengajarId },
                },
            },
        });
    };
    getKelasByPengajar = (pengajarId) => {
        return this.prisma.kelas.findMany({
            where: { id: pengajarId }, // pastikan di DB ada kolom pengajarId atau relasi
            orderBy: { namaKelas: "asc" },
        });
    };
    async findByPengajar(pengajarId) {
        return this.prisma.kelas.findMany({
            where: {
                pengajar: {
                    some: { id: pengajarId },
                },
            },
            include: {
                santri: {
                    where: {
                        isActive: true
                    },
                    include: {
                        profile: {
                            select: {
                                fotoUrl: true
                            }
                        }
                    },
                },
                pengajar: true,
                absensiSetting: true,
                absensi: true,
                jadwal: true,
                izin: true,
                tugas: true,
            },
        });
    }
}
//# sourceMappingURL=kelas.repository.js.map