import { successResponse } from "../utils/response.js";
export class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    // REGISTER USER
    register = async (req, res) => {
        const { name, email, password, role, kelasId } = req.body;
        const user = await this.authService.register({
            name,
            email,
            password,
            role,
            kelasId
        });
        successResponse(res, "User berhasil didaftarkan", user, null, 201);
    };
    // LOGIN USER
    login = async (req, res) => {
        const { email, password } = req.body;
        const { token, user } = await this.authService.login(email, password);
        successResponse(res, "Login berhasil", { token, user });
    };
}
//# sourceMappingURL=auth.controller.js.map
