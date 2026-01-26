import dotenv from "dotenv";
dotenv.config();

const config = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: Number(process.env.PORT) || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET || "strongpassword123",
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  FROM_EMAIL: process.env.FROM_EMAIL || 'zidanalbani97@gmail.com',
};

export default config;
