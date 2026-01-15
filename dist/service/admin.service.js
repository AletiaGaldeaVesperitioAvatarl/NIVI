import crypto from "crypto";
import bcrypt from "bcrypt";
export class AdminService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    createSantriByAdmin = async (data) => {
        const activationToken = crypto.randomUUID();
        return this.repo.createSantriByAdmin({
            ...data,
            activationToken,
        });
    };
    activate = async (token, password) => {
        const user = await this.repo.findByActivationToken(token);
        if (!user)
            throw new Error("Token invalid");
        if (user.activatedAt)
            throw new Error("Sudah aktif");
        const hashed = await bcrypt.hash(password, 10);
        return this.repo.activate(user.id, hashed);
    };
    async assign(kelasId, pengajarId) {
        return this.repo.assignPengajar(kelasId, pengajarId);
    }
    async remove(kelasId, pengajarId) {
        return this.repo.removePengajar(kelasId, pengajarId);
    }
    async listPengajar(kelasId) {
        return this.repo.getPengajarByKelas(kelasId);
    }
    createPengajarByAdmin = async (data) => {
        const activationToken = crypto.randomUUID();
        return this.repo.createPengajarByAdmin({
            ...data,
            activationToken,
        });
    };
    createUser = async (data) => {
        const activationToken = crypto.randomUUID();
        return this.repo.createUserByAdmin({
            ...data,
            activationToken,
        });
    };
}
//# sourceMappingURL=admin.service.js.map