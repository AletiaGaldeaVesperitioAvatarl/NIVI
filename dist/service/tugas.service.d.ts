import { Tugas } from "../../dist/generated/index.js";
import { TugasRepository } from "../repository/tugas.repository.js";
export declare class TugasService {
    private tugasRepository;
    constructor(tugasRepository: TugasRepository);
    getAll: () => Promise<Tugas[]>;
    getById: (id: number) => Promise<Tugas | null>;
    createTugas: (data: {
        kelasId: number;
        title: string;
        description?: string;
        deadline: Date;
        createdBy: number;
    }) => Promise<Tugas>;
    updateTugas: (id: number, data: Partial<Tugas>) => Promise<Tugas>;
    deleteTugas: (id: number) => Promise<Tugas>;
    getTasksForSantri(userId: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        deadline: Date;
        status: import("../../dist/generated/index.js").$Enums.StatusSubmission;
        submission_link: string | null;
        submitted_at: Date | null;
    }[]>;
}
//# sourceMappingURL=tugas.service.d.ts.map
