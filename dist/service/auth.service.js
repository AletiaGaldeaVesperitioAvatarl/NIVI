import { Role } from "../../dist/generated/index.js";
import jwt from "jsonwebtoken";
import config from "../utils/env.js";
import bcrypt from "bcrypt";
export class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    // REGISTER USER
    register = async (data) => {
        const existingUser = await this.authRepository.getUserByEmail(data.email);
        if (existingUser) {
            throw new Error("Email sudah terdaftar!");
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        return this.authRepository.createUser({
            ...data,
            role: Role.santri,
            password: hashedPassword,
        });
    };
    // LOGIN USER
    login = async (email, password) => {
        const user = await this.authRepository.getUserByEmail(email);
        if (!user)
            throw new Error("Email tidak ditemukan!");
        const passwordValid = await this.authRepository.verifyPassword(password, user.password);
        if (!passwordValid)
            throw new Error("Password salah!");
        // generate JWT
        const token = jwt.sign({
            id: user.id,
            role: user.role,
            kelasId: user.kelasId,
        }, config.JWT_SECRET, { expiresIn: "1d" });
        return { token, user };
    };
}
//# sourceMappingURL=auth.service.js.map
