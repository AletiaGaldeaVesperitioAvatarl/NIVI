import { AbsensiRepository } from "../repository/absensi.repository";
import { AIService } from "../ai/ai.service";
import { absensiCommentPrompt } from "../ai/prompt/absensiComment.prompt";

export class AbsensiAIService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private aiService: AIService
  ) {}

  /**
   * Analisis AI untuk satu absensi
   */
  async analyzeAbsensi(absensiId: number): Promise<void> {
    
    // 1️⃣ Ambil absensi + user
    const absensi = await this.absensiRepo.getByIdWithUser(absensiId);

    if (!absensi || !absensi.user) {
      console.warn("[AI] Absensi atau user tidak ditemukan:", absensiId);
      return;
    }

    // 2️⃣ Hitung statistik bulanan
    const now = new Date();
    const totalAlphaBulanIni = await this.absensiRepo.countMonthly(
      absensi.userId,
      now.getMonth(),
      now.getFullYear()
    );

    // (opsional, kalau mau)
    const totalHadirBulanIni = 0;

    // 3️⃣ Bangun prompt (SATU SUMBER)
    const prompt = absensiCommentPrompt({
      status: absensi.status,
      totalAlphaBulanIni,
      totalHadirBulanIni,
    });

    // 4️⃣ Panggil AI
    const aiResult = await this.aiService.analyzeAbsensi(prompt);

    if (!aiResult?.comment) {
      console.warn("[AI] Hasil AI kosong, skip:", absensiId);
      return;
    }

    // 5️⃣ Simpan hasil AI (AMAN dari undefined)
    await this.absensiRepo.updateAI(absensi.id, {
      aiComment: aiResult.comment,
      aiTone: aiResult.tone,
      aiConfidence: aiResult.confidence,
    });
  }
}
