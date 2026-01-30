import dotenv from "dotenv";
dotenv.config();

const listGroqModels = async () => {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    console.error("❌ Error: GROQ_API_KEY tidak ditemukan di file .env");
    return;
  }

  console.log("Memeriksa daftar model aktif di Groq...");

  try {
    const response = await fetch("https://api.groq.com/openai/v1/models", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json() as any;

    if (data.error) {
      console.error("❌ API Error:", data.error.message);
      return;
    }

    console.log("\n✅ Model yang bisa Anda gunakan:");
    console.log("-----------------------------------");
    data.data.forEach((model: any) => {
      // Kita filter hanya model chat (bukan audio/whisper)
      if (!model.id.includes("whisper")) {
        console.log(`- ${model.id} (Pemilik: ${model.owned_by})`);
      }
    });
    console.log("-----------------------------------");
    console.log("\nSalin salah satu ID di atas ke ai.service.ts Anda.");

  } catch (error: any) {
    console.error("❌ Terjadi kesalahan jaringan:", error.message);
  }
};

listGroqModels();