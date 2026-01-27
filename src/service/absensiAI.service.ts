import { AIService } from "../ai/ai.service";
import { AbsensiRepository } from "../repository/absensi.repository";

export class AbsensiAIService {
  constructor(
    private absensiRepo: AbsensiRepository,
    private aiService: AIService
  ) {}

  /**
   * Analisis AI untuk 1 data absensi
   */
  async analyzeAbsensi(absensiId: number): Promise<void> {
    const absensi = await this.absensiRepo.getById(absensiId);

    if (!absensi || !absensi.user) {
      console.warn("[AI] Absensi tidak ditemukan:", absensiId);
      return;
    }

    // Hitung alpha bulanan
    const alphaCount = await this.absensiRepo.countMonthly(
      absensi.userId,
      new Date().getMonth(),
      new Date().getFullYear()
    );

    // 🧠 Prompt AI
    const prompt = `
Nama santri: ${absensi.user.name}
Kelas ID: ${absensi.kelasId}
Status absensi hari ini: ${absensi.status}
Total alpha bulan ini: ${alphaCount}

Berikan komentar singkat untuk wali kelas.
`;

    // 🤖 Panggil AI
    const aiResult = await this.aiService.analyzeAbsensi(prompt);

    // 🛡️ Fallback protection
    if (!aiResult?.comment) {
      console.warn("[AI] Hasil kosong, skip update:", absensiId);
      return;
    }

    // 💾 Simpan ke DB
    await this.absensiRepo.updateAI(absensi.id, {
      aiComment: aiResult.comment,
      aiTone: aiResult.tone,
      aiConfidence: aiResult.confidence,
    });
  }
}
