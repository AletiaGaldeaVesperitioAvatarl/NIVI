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
      const res = await this.client.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content:
              "Kamu adalah asisten akademik pesantren. Jawaban singkat, objektif, dan sopan.",
          },
          { role: "user", content: prompt },
        ],
      });

      const content = res.choices?.[0]?.message?.content;

      if (!content) {
        return {
          comment: "Analisis AI belum tersedia.",
          tone: "netral",
          confidence: 0.2,
        };
      }

      return {
        comment: content.trim(),
        tone: content.includes("peringatan") ? "peringatan" : "netral",
        confidence: 0.85,
      };
    } catch (err) {
      console.error("[AI ERROR]", err);
      return {
        comment: "Analisis AI gagal diproses.",
        tone: "netral",
        confidence: 0.1,
      };
    }
  }
}
