import dotenv from "dotenv";
dotenv.config();

const config = {
  HOST: process.env.HOST || "0.0.0.0",
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  NODE: process.env.NODE_ENV || "development",
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET || "strong password 123",
};

export default config;
