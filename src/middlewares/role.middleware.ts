import type { Request, Response, NextFunction } from "express";
import { Role } from "../../dist/generated";

export const roleMiddleware = (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({
        message: "Akses ditolak",
      });
    }

    next();
  };
};
