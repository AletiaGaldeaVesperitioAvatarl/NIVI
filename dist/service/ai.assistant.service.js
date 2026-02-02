export class AIAssistantService {
    absensiRepo;
    aiService;
    constructor(absensiRepo, aiService) {
        this.absensiRepo = absensiRepo;
        this.aiService = aiService;
    }
    async evaluateAbsensi(absensiId, role) {
        try {
            const absensi = await this.absensiRepo.getByIdWithUser(absensiId);
            if (!absensi || !absensi.user)
                return;
            const now = new Date();
            const month = now.getMonth();
            const year = now.getFullYear();
            // Data Statistik untuk Konteks
            const totalAlpha = await this.absensiRepo.countMonthly(absensi.userId, month, year);
            const totalHadir = await this.absensiRepo.countHadirMonthly(absensi.userId, month, year);
            const spamCountToday = await this.absensiRepo.countSpamToday(absensi.userId);
            const lastAbsensi = await this.absensiRepo.findLastByUser(absensi.userId);
            const minutesSinceLast = lastAbsensi
                ? (now.getTime() - new Date(lastAbsensi.tanggal).getTime()) / 60000
                : Infinity;
            let spamLevel = this.getSpamLevel(minutesSinceLast, spamCountToday);
            // Siapkan Prompt Berbasis Role
            const prompt = this.buildPrompt({
                role,
                nama: absensi.user.name || "User",
                status: absensi.status,
                totalAlpha,
                totalHadir,
                spamLevel,
            });
            console.log(`[AI ASSISTANT] Analyzing as ${role} for ID: ${absensiId}...`);
            const aiResult = await this.aiService.analyzeAbsensi(prompt);
            let finalComment = "";
            let finalTone = this.mapTone(spamLevel, absensi.status);
            if (aiResult && aiResult.comment) {
                finalComment = aiResult.comment;
            }
            else {
                finalComment =
                    role === "santri"
                        ? "Absensi berhasil dicatat. Terus semangat!"
                        : "Data absensi telah diperbarui di sistem.";
            }
            await this.saveAndEmit(absensi.id, absensi.userId, finalComment, finalTone, 0.95);
        }
        catch (error) {
            console.error("[AI ASSISTANT ERROR]", error.message);
        }
    }
    buildPrompt(data) {
        const isSantri = data.role === "santri";
        if (isSantri) {
            return `
Anda adalah Asisten Digital Pesantren. Berikan feedback SANGAT SINGKAT (Maksimal 15 kata) untuk Santri: ${data.nama}.
Konteks: Status ${data.status}, Hadir ${data.totalHadir}x, Alpha ${data.totalAlpha}x.
Instruksi: Berikan motivasi pendek atau doa singkat jika sakit. Jangan bertele-tele.
`;
        }
        else {
            return `
Anda adalah Sistem Monitoring Akademik. Berikan laporan SANGAT SINGKAT (Maksimal 10 kata) untuk Pengajar: ${data.nama}.
Konteks: Input absensi ${data.status}.
Instruksi: Berikan konfirmasi singkat bahwa data aman. Bahasa formal dan sangat efisien.
`;
        }
    }
    getSpamLevel(minutes, count) {
        if (count >= 5)
            return "high"; // benar-benar banyak
        if (minutes < 1)
            return "low"; // hanya terlalu cepat, bukan spam parah
        return "none";
    }
    mapTone(level, status) {
        if (level === "high")
            return "peringatan";
        // abaikan level low
        if (status === "sakit")
            return "netral";
        return "positif";
    }
    async saveAndEmit(absId, uId, msg, tone, conf) {
        await this.absensiRepo.updateAI(absId, {
            aiComment: msg,
            aiTone: tone,
            aiConfidence: conf,
        });
        console.log(`[AI DONE] Role-Based Response Sent to User ${uId}`);
    }
}
//# sourceMappingURL=ai.assistant.service.js.map