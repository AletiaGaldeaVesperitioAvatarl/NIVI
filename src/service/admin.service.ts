import { AdminRepository } from "../repository/admin.repository";
import bcrypt from "bcrypt";

export class AdminService {
  constructor(private repo: AdminRepository) {}

  // ADMIN PERTAMA
  createFirstAdmin = async (data: { name: string; email: string; password: string }) => {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new Error("Email sudah terdaftar");

    const hashed = await bcrypt.hash(data.password, 10);
    return this.repo.createAdmin({ ...data, password: hashed });
  };

  // CREATE SANTRI
  createSantriByAdmin = async (data: { name: string; email: string; kelasId: number }) => {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new Error("Email sudah terdaftar");

    return this.repo.createSantriByAdmin(data);
  };

  // CREATE PENGAJAR
  createPengajarByAdmin = async (data: { name: string; email: string }) => {
    const existing = await this.repo.findByEmail(data.email);
    if (existing) throw new Error("Email sudah terdaftar");

    return this.repo.createPengajarByAdmin(data);
  };

  // AKTIVASI PASSWORD PERTAMA
  activateWithPassword = async (email: string, password: string) => {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("User tidak ditemukan");
    if (user.password !== "INACTIVE") throw new Error("Akun sudah aktif");

    const hashed = await bcrypt.hash(password, 10);
    return this.repo.updatePassword(user.id, hashed);
  };

  // PENGAJAR KELAS
  async assign(kelasId: number, pengajarId: number) {
    return this.repo.assignPengajar(kelasId, pengajarId);
  }

  async remove(kelasId: number, pengajarId: number) {
    return this.repo.removePengajar(kelasId, pengajarId);
  }

  async listPengajar(kelasId: number) {
    return this.repo.getPengajarByKelas(kelasId);
  }

  listAdmins = () => this.repo.getAllAdmins();

  getAdmin = (id: number) => this.repo.getAdminById(id);

  updateAdmin = async (id: number, data: Partial<{ name: string; email: string; password: string }>) => {
    if (data.password) {
      const hashed = await bcrypt.hash(data.password, 10);
      data.password = hashed;
    }
    return this.repo.updateAdmin(id, data);
  };

  deleteAdmin = (id: number) => this.repo.deleteAdmin(id);
}
