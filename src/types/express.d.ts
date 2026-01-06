import { Role } from "../../dist/generated";

declare global {
  namespace Express {
    interface Request {
      startTime?: number;
      apiKey?: string;
      user?: {
        id: string;
        role: Role;
        kelasId:number
      };
    }
  }
}
