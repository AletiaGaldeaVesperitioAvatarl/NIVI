import { AuthRepository } from "../repository/auth.repository";
import { User, Role } from "../../dist/generated";
import jwt from "jsonwebtoken";
import config from "../utils/env";
import bcrypt from "bcrypt";

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  // REGISTER USER
register = async (data: {
  name: string;
  email: string;
  password: string;
  role: Role;
  kelasId?: number;
}) => {

  const existingUser = await this.authRepository.getUserByEmail(data.email);
  if (existingUser) {
    throw new Error("Email sudah terdaftar!");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return this.authRepository.createUser({
    ...data,
    password: hashedPassword,
  });
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
