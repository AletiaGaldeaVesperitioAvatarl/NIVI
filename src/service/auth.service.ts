import { AuthRepository } from "../repository/auth.repository";
import { User, Role } from "../../dist/generated";
import jwt from "jsonwebtoken";
import config from "../utils/env";

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  // REGISTER USER
  register = async (data: {
    name: string;
    email: string;
    password: string;
    role: Role;
    kelasId?: number;
  }): Promise<User> => {
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
  login = async (
    email: string,
    password: string
  ): Promise<{ token: string; user: User }> => {
    const user = await this.authRepository.getUserByEmail(email);
    if (!user) throw new Error("Email tidak ditemukan!");

    const passwordValid = await this.authRepository.verifyPassword(
      password,
      user.password
    );
    if (!passwordValid) throw new Error("Password salah!");

    // generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      config.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return { token, user };
  };
}
