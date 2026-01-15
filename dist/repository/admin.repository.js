import { Role } from "../../dist/generated/index.js";
export class AdminRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    createSantriByAdmin = async (data) => {
        return this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                kelasId: data.kelasId,
                role: Role.santri,
                password: "",
                activationToken: data.activationToken,
                activatedAt: null,
            },
        });
    };
    findByActivationToken = async (token) => {
        return this.prisma.user.findFirst({
            where: { activationToken: token },
        });
    };
    activate = async (id, hashedPassword) => {
        return this.prisma.user.update({
            where: { id },
            data: {
                password: hashedPassword,
                activatedAt: new Date(),
                activationToken: null,
            },
        });
    };
    assignPengajar(kelasId, pengajarId) {
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: {
                    connect: { id: pengajarId },
                },
            },
        });
    }
    removePengajar(kelasId, pengajarId) {
        return this.prisma.kelas.update({
            where: { id: kelasId },
            data: {
                pengajar: {
                    disconnect: { id: pengajarId },
                },
            },
        });
    }
    getPengajarByKelas(kelasId) {
        return this.prisma.kelas.findUnique({
            where: { id: kelasId },
            select: {
                id: true,
                namaKelas: true,
                pengajar: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });
    }
    createPengajarByAdmin = async (data) => {
        return this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                role: Role.pengajar,
                password: null,
                activationToken: data.activationToken,
                activatedAt: null,
            },
        });
    };
    createUserByAdmin(data) {
        return this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                role: data.role,
                kelasId: data.kelasId ?? null,
                password: "INACTIVE",
                activationToken: data.activationToken,
                activatedAt: null,
            },
        });
    }
}
//# sourceMappingURL=admin.repository.js.map
