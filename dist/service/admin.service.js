import bcrypt from "bcrypt";
export class AdminService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    // ADMIN PERTAMA
    createFirstAdmin = async (data) => {
        const existing = await this.repo.findByEmail(data.email);
        if (existing)
            throw new Error("Email sudah terdaftar");
        const hashed = await bcrypt.hash(data.password, 10);
        return this.repo.createAdmin({ ...data, password: hashed });
    };
    // CREATE SANTRI
    createSantriByAdmin = async (data) => {
        const existing = await this.repo.findByEmail(data.email);
        if (existing)
            throw new Error("Email sudah terdaftar");
        return this.repo.createSantriByAdmin(data);
    };
    // CREATE PENGAJAR
    createPengajarByAdmin = async (data) => {
        const existing = await this.repo.findByEmail(data.email);
        if (existing)
            throw new Error("Email sudah terdaftar");
        return this.repo.createPengajarByAdmin(data);
    };
    // AKTIVASI PASSWORD PERTAMA
    activateWithPassword = async (email, password) => {
        const user = await this.repo.findByEmail(email);
        if (!user)
            throw new Error("User tidak ditemukan");
        if (user.password !== "INACTIVE")
            throw new Error("Akun sudah aktif");
        const hashed = await bcrypt.hash(password, 10);
        return this.repo.updatePassword(user.id, hashed);
    };
    // PENGAJAR KELAS
    async assign(kelasId, pengajarId) {
        return this.repo.assignPengajar(kelasId, pengajarId);
    }
    async remove(kelasId, pengajarId) {
        return this.repo.removePengajar(kelasId, pengajarId);
    }
    async listPengajar(kelasId) {
        return this.repo.getPengajarByKelas(kelasId);
    }
    listAdmins = () => this.repo.getAllAdmins();
    getAdmin = (id) => this.repo.getAdminById(id);
    updateAdmin = async (id, data) => {
        if (data.password) {
            const hashed = await bcrypt.hash(data.password, 10);
            data.password = hashed;
        }
        return this.repo.updateAdmin(id, data);
    };
    deleteAdmin = (id) => this.repo.deleteAdmin(id);
    createAdmin = async (data) => {
        const existing = await this.repo.findByEmail(data.email);
        if (existing)
            throw new Error("Email sudah terdaftar");
        const hashed = await bcrypt.hash(data.password, 10);
        return this.repo.createAdmin({ ...data, password: hashed });
    };
}
//# sourceMappingURL=admin.service.js.map