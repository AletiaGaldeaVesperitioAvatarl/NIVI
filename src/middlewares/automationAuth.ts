import { Request, Response, NextFunction } from "express";

export function automationAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.replace("Bearer ", "");

  if (!token || token !== process.env.AUTOMATION_TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}
