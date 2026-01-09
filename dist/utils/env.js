import dotenv from "dotenv";
dotenv.config();
const config = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    NODE: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || "strong password 123",
};
export default config;
//# sourceMappingURL=env.js.map