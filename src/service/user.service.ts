import { Role, User } from "../../dist/generated";
import { UserRepository } from "../repository/user.repository";

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
}
