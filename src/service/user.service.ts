import { Role, User } from "../../dist/generated";
import { UserRepository } from "../repository/user.repository";
import bcrypt from "bcrypt";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  // GET ALL ACTIVE USERS
  getAll = async (): Promise<User[]> => {
    return this.userRepository.findAll();
  };

  // GET USER BY ID
  getById = async (id: number): Promise<User | null> => {
    return this.userRepository.findById(id);
  };

  // GET USER BY EMAIL
  getByEmail = async (email: string): Promise<User | null> => {
    return this.userRepository.findByEmail(email);
  };

  // CREATE USER
  createUser = async (data: {
    name: string;
    email: string;
    password: string;
    role: Role;
    kelasId?: number;
  }): Promise<User> => {
    return this.userRepository.create(data);
  };

  // UPDATE USER
  updateUser = async (id: number, data: Partial<User>): Promise<User> => {
    return this.userRepository.update(id, data);
  };

  // DEACTIVATE USER
  deactivateUser = async (id: number): Promise<User> => {
    return this.userRepository.deactivate(id);
  };

  // GET USER STATS
  getStats = async () => {
    return this.userRepository.getStats();
  };

  getSantri = async () => {
    return this.userRepository.getSantri();
  };

  getPengajar = async () => {
    return this.userRepository.getPengajar();
  };

  createAdmin = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const adminExist = await this.userRepository.isAdminExist();

    if (adminExist) {
      throw new Error("Admin sudah ada, tidak bisa membuat admin baru");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return this.userRepository.create({
      name: data.name,
      email: data.email,
      password: hashedPassword, // ✅ HASHED
      role: Role.admin,
    });
  };

  activateUser = async(userId: number, role?: Role) => {
    const user = await this.userRepository.findById(userId);
    if (!user) throw new Error("User tidak ditemukan");
    if (user.isActive) return user;

    if (role) {
      const updated = await this.userRepository.activateByRole(userId, role);
      if (updated.count === 0) throw new Error("User dengan role ini tidak ditemukan");
      return await this.userRepository.findById(userId);
    } else {
      return this.userRepository.activate(userId);
    }
  }

    async getUsersByKelas(kelasId: number) {
    return this.userRepository.findManyByKelas(kelasId);
  }


    async getUsers() {
    return this.userRepository.getAllUsers();
  }
  
  
}
