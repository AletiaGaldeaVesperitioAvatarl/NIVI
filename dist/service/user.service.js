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
}
//# sourceMappingURL=user.service.js.map