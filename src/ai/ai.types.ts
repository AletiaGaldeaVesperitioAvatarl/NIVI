export type AiIzinResult = {
  decision: "TERIMA" | "REVIEW" | "TOLAK";
  confidence: number; // 0 - 1
  reason: string;
};
