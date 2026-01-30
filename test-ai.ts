import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const test = async () => {
  console.log("Memulai tes koneksi Google AI...");
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  
  try {
    // Kita minta AI list model apa saja yang BOLEH kita pakai
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Halo, apakah kamu aktif?");
    console.log("Respon AI:", result.response.text());
    console.log("✅ INTEGRASI SUKSES!");
  } catch (e: any) {
    console.error("❌ GAGAL:", e.message);
    console.log("Saran: Coba ganti model ke 'gemini-pro' di .env atau service.");
  }
};

test();