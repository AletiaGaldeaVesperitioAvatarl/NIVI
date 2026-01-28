import { Role } from "../../dist/generated";
import { AIService } from "../ai/ai.service";
import { AbsensiRepository } from "../repository/absensi.repository";
import { io } from "../socket";

export class AIAssistantService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private aiService: AIService,
  ) {}
  async evaluateAbsensi(absensiId: number, role: Role): Promise<void> {
    const absensi = await this.absensiRepo.getByIdWithUser(absensiId);
    if (!absensi || !absensi.user) return;

    const now = new Date();
    const totalAlpha = await this.absensiRepo.countMonthly(
      absensi.userId,
      now.getMonth(),
      now.getFullYear(),
    );

    // =====================
    // 🧠 DETEKSI SPAM ABSENSI
    // =====================
    const lastAbsensi = await this.absensiRepo.findLastByUser(absensi.userId);
    const minutesSinceLast = lastAbsensi
      ? (now.getTime() - new Date(lastAbsensi.tanggal).getTime()) / 60000
      : Infinity;

    let spamNotice = "";
    if (minutesSinceLast < 5) {
      // kurang dari 5 menit dianggap spam
      spamNotice =
        "Catatan: Absensi ini terlalu dekat dengan sebelumnya, periksa kemungkinan spam.";
    }

    // =====================
    // 🧠 BUILD PROMPT BY ROLE
    // =====================
    const prompt = this.buildPrompt({
      role,
      status: absensi.status,
      totalAlpha,
      spamNotice,
    });
    console.log("Prompt AI:", prompt);

    // =====================
    // 🤖 CALL AI
    // =====================
    const aiResult =
      process.env.AI_MODE === "debug"
        ? {
            comment: `${spamNotice}`,
            tone: spamNotice ? "peringatan" : "netral",
            confidence: 0.9,
          }
        : await this.aiService.analyzeAbsensi(prompt);

    // =====================
    // 💾 SAVE RESULT
    // =====================
    await this.absensiRepo.updateAI(absensi.id, {
      aiComment: aiResult.comment,
      aiTone: aiResult.tone,
      aiConfidence: aiResult.confidence,
    });

    // =====================
    // 🔔 EMIT REAL-TIME
    // =====================
    io.to(`user-${absensi.userId}`).emit("ai-bubble", {
      message: aiResult.comment,
      tone: aiResult.tone,
      confidence: aiResult.confidence,
    });

    console.log("[AI EMIT]", aiResult, `for user-${absensi.userId}`);

    // debug: emit ke semua user supaya pasti sampai di FE
    io.emit("ai-bubble", aiResult);
  }

  private buildPrompt(data: {
    role: Role;
    status: string;
    totalAlpha: number;
    spamNotice?: string;
  }): string {
    let prompt = "";

    if (data.role === "santri") {
      if (data.status === "hadir" && data.totalAlpha < 3) {
        prompt = `
Kamu pembina santri.
Status hari ini: ${data.status}
Total alpha bulan ini: ${data.totalAlpha}
Santri hadir tepat waktu. Berikan ucapan singkat yang menyenangkan dan memotivasi.
`;
      } else {
        prompt = `
Kamu pembina santri.
Status hari ini: ${data.status}
Total alpha bulan ini: ${data.totalAlpha}
Berikan pesan singkat, membimbing, tidak menghakimi.
`;
      }
    } else if (data.role === "pengajar") {
      prompt = `
Kamu asisten wali kelas.
Status santri: ${data.status}
Alpha bulan ini: ${data.totalAlpha}
Berikan peringatan atau catatan pengawasan.
`;
    } else {
      prompt = `
Kamu asisten admin sistem.
Total alpha bulan ini: ${data.totalAlpha}
Laporkan potensi pelanggaran atau anomali.
`;
    }

    if (data.spamNotice) {
      prompt += `\n${data.spamNotice}`;
    }

    return prompt;
  }
}
