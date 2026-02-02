import { Role } from "../../dist/generated/index.js";
import { AIService } from "../ai/ai.service.js";
import { AbsensiRepository } from "../repository/absensi.repository.js";
export declare class AIAssistantService {
    private absensiRepo;
    private aiService;
    constructor(absensiRepo: AbsensiRepository, aiService: AIService);
    evaluateAbsensi(absensiId: number, role: Role): Promise<void>;
    private buildPrompt;
    private getSpamLevel;
    private mapTone;
    private saveAndEmit;
}
//# sourceMappingURL=ai.assistant.service.d.ts.map
