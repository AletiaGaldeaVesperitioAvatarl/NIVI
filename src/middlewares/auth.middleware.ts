import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response";
import config from "../utils/env";
import { Role } from "../../dist/generated";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return errorResponse(res, "Token tidak ditemukan!", 401);
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return errorResponse(res, "Token tidak valid!", 401);
  }

  try {
    const payload = jwt.verify(token, config.JWT_SECRET) as {
      id: string;
      role: Role;
    };

    req.user = payload;
    next();
  } catch (error) {
    return errorResponse(res, "Token tidak valid!", 401);
  }
};
