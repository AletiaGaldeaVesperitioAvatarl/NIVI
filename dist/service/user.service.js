import { Role } from "../../dist/generated/index.js";
import bcrypt from "bcrypt";
export class UserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    // GET ALL ACTIVE USERS
    getAll = async () => {
        return this.userRepository.findAll();
    };
    // GET USER BY ID
    getById = async (id) => {
        return this.userRepository.findById(id);
    };
    // GET USER BY EMAIL
    getByEmail = async (email) => {
        return this.userRepository.findByEmail(email);
    };
    // CREATE USER
    createUser = async (data) => {
        return this.userRepository.create(data);
    };
    // UPDATE USER
    updateUser = async (id, data) => {
        return this.userRepository.update(id, data);
    };
    // DEACTIVATE USER
    deactivateUser = async (id) => {
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
    createAdmin = async (data) => {
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
}
//# sourceMappingURL=user.service.js.map
