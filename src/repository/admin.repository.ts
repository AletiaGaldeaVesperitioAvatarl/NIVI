import { PrismaClient, Role, User } from "../../dist/generated";

export class AdminRepository {
  constructor(private prisma: PrismaClient) {}

  createSantriByAdmin = async (data: {
    name: string;
    email: string;
    kelasId: number;
    activationToken: string;
  }): Promise<User> => {
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

findByActivationToken = async (token: string) => {
  return this.prisma.user.findFirst({
    where: { activationToken: token },
  });
};

activate= async (id: number, hashedPassword: string) => {
  return this.prisma.user.update({
    where: { id },
    data: {
      password: hashedPassword,
      activatedAt: new Date(),
      activationToken: null,
    },
  });
};

  


  assignPengajar(kelasId: number, pengajarId: number) {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: {
          connect: { id: pengajarId },
        },
      },
    });
  }

  removePengajar(kelasId: number, pengajarId: number) {
    return this.prisma.kelas.update({
      where: { id: kelasId },
      data: {
        pengajar: {
          disconnect: { id: pengajarId },
        },
      },
    });
  }

  getPengajarByKelas(kelasId: number) {
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


  createPengajarByAdmin = async (data: {
    name: string;
    email: string;
    activationToken: string;
  }): Promise<User> => {
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

 
createUserByAdmin(data: {
  name: string;
  email: string;
  role: Role;
  kelasId?: number;
  activationToken: string;
}) {
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


