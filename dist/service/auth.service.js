import jwt from "jsonwebtoken";
import config from "../utils/env.js";
import bcrypt from "bcrypt";
export class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    // LOGIN USER
    login = async (email, password) => {
        const user = await this.authRepository.getUserByEmail(email);
        if (!user)
            throw new Error("Email tidak ditemukan");
        // 🔹 cek activatedAt harus benar-benar ada
        if (!user.activatedAt) {
            return { status: "NOT_ACTIVE", token: user.activationToken };
        }
        if (!user.password)
            throw new Error("Password belum diset");
        const valid = await bcrypt.compare(password, user.password);
        if (!valid)
            throw new Error("Password salah");
        const jwtToken = jwt.sign({ id: user.id, role: user.role, kelasId: user.kelasId ?? null }, config.JWT_SECRET, { expiresIn: "1d" });
        return { status: "OK", token: jwtToken, user };
    };
    requestActivation = async (email) => {
        const user = await this.authRepository.getUserByEmail(email);
        if (!user) {
            throw new Error("Email tidak terdaftar");
        }
        if (user.activatedAt) {
            throw new Error("Akun sudah aktif, silakan login");
        }
        return {
            email: user.email,
            token: user.activationToken,
        };
    };
    // 🔹 SET PASSWORD / AKTIVASI
    activateAccount = async (token, password) => {
        const user = await this.authRepository.findByActivationToken(token);
        if (!user)
            throw new Error("Token aktivasi tidak valid");
        const hashed = await bcrypt.hash(password, 10);
        const updated = await this.authRepository.activateUser(user.id, hashed);
        if (!updated.activatedAt) {
            throw new Error("Aktivasi gagal, silakan coba lagi");
        }
        return { message: "Akun berhasil diaktifkan" };
    };
}
//# sourceMappingURL=auth.service.js.map
