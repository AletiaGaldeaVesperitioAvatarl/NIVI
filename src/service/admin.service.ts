import crypto from "crypto";
import bcrypt from "bcrypt";
import { AdminRepository } from "../repository/admin.repository";
import { Role } from "../../dist/generated";

export class AdminService {
  constructor(private repo: AdminRepository) {}

  createSantriByAdmin = async (data: {
    name: string;
    email: string;
    kelasId: number;
  }) => {
    const activationToken = crypto.randomUUID();

    return this.repo.createSantriByAdmin({
      ...data,
      activationToken,
    });
  };

activate = async (token: string, password: string) => {
  const user = await this.repo.findByActivationToken(token);
  if (!user) throw new Error("Token invalid");
  if (user.activatedAt) throw new Error("Sudah aktif");

  const hashed = await bcrypt.hash(password, 10);

  return this.repo.activate(user.id, hashed);
};



  
    async assign(kelasId: number, pengajarId: number) {
    return this.repo.assignPengajar(kelasId, pengajarId);
  }

  async remove(kelasId: number, pengajarId: number) {
    return this.repo.removePengajar(kelasId, pengajarId);
  }

  async listPengajar(kelasId: number) {
    return this.repo.getPengajarByKelas(kelasId);
  }

   createPengajarByAdmin = async (data: {
    name: string;
    email: string;
  }) => {
    const activationToken = crypto.randomUUID();

    return this.repo.createPengajarByAdmin({
      ...data,
      activationToken,
    });
  };

createUser = async (data: {
  name: string;
  email: string;
  role: Role;
  kelasId?: number;
}) => {
  const activationToken = crypto.randomUUID();

  return this.repo.createUserByAdmin({
    ...data,
    activationToken,
  });
};


}
