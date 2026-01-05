import { LogAktivitas } from "../../dist/generated";
import { LogAktivitasRepository } from "../repository/logAktivitas.repository";

export class LogAktivitasService {
  constructor(private logRepo: LogAktivitasRepository) {}

  // CREATE LOG (BIASA DIPAKE DI AUTH / ACTION PENTING)
  createLog = async (
    userId: number,
    aktivitas: string
  ): Promise<LogAktivitas> => {
    return this.logRepo.create({
      userId,
      aktivitas,
    });
  };

  // GET ALL LOG
  getAllLogs = async (): Promise<LogAktivitas[]> => {
    return this.logRepo.findAll();
  };

  // GET LOG BY USER
  getLogsByUser = async (userId: number): Promise<LogAktivitas[]> => {
    return this.logRepo.findByUserId(userId);
  };

  // DELETE LOG (ADMIN ONLY)
  deleteLog = async (id: number): Promise<LogAktivitas> => {
    return this.logRepo.delete(id);
  };
}
