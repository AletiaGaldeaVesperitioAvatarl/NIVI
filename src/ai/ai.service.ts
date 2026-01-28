import OpenAI from "openai";

export class AIService {
  private client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });
  }

  async analyzeAbsensi(prompt: string): Promise<{
    comment: string;
    tone: "positif" | "netral" | "peringatan";
    confidence: number;
  }> {
    try {
      // 🧠 Panggil OpenAI untuk generate respons nyata
      const res = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.7, // respons lebih natural
        messages: [
          {
            role: "system",
            content: `
Kamu adalah pembina santri pesantren.
Berikan komentar yang nyata:
- Hangat dan membimbing untuk santri hadir tepat waktu
- Tegas tapi sopan untuk alpha atau izin yang sering
- Peringatan lembut untuk spam absensi
Balas HARUS dalam format JSON:
{
  "comment": "…",
  "tone": "positif|netral|peringatan",
  "confidence": 0-1
}
            `,
          },
          { role: "user", content: prompt },
        ],
      });

      const content = res.choices?.[0]?.message?.content;
      if (!content) throw new Error("Empty AI response");

      // parsing hasil OpenAI
      const parsed = JSON.parse(content);

      return {
        comment: parsed.comment || "AI tidak bisa memberikan komentar.",
        tone: parsed.tone || "netral",
        confidence: parsed.confidence ?? 0.5,
      };
    } catch (err) {
      console.error("[AI ERROR]", err);
      return {
        comment: "Belum ada analisis AI.",
        tone: "netral",
        confidence: 0.1,
      };
    }
  }
}
