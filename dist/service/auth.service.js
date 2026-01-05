import jwt from "jsonwebtoken";
import config from "../utils/env.js";
export class AuthService {
    authRepository;
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    // REGISTER USER
    register = async (data) => {
        // cek email udah ada apa belum
        const existingUser = await this.authRepository.getUserByEmail(data.email);
        if (existingUser) {
            throw new Error("Email sudah terdaftar!");
        }
        // create user
        const user = await this.authRepository.createUser(data);
        return user;
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
        const token = jwt.sign({ id: user.id, role: user.role }, config.JWT_SECRET, { expiresIn: "1d" });
        return { token, user };
    };
}
//# sourceMappingURL=auth.service.js.map
