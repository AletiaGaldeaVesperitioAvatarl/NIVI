import dotenv from "dotenv";
dotenv.config();

const config = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT),
  NODE: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET || "strong password 123",
};

export default config;
