export class SubmissionService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    /**
     * =========================
     * PENGAJAR
     * =========================
     * Ambil semua submission dari kelas yang dia ajar
     */
    async getForPengajar(pengajarId) {
        return this.repo.findForPengajar(pengajarId);
    }
    /**
     * =========================
     * SANTRI
     * =========================
     * Ambil submission milik santri sendiri
     */
    async getForSantri(userId) {
        return this.repo.findForSantri(userId);
    }
    /**
     * =========================
     * SANTRI SUBMIT TUGAS
     * =========================
     */
    async submitTugas(params) {
        const { userId, tugasId, fileUrl, linkUrl } = params;
        const data = {
            user: {
                connect: { id: userId },
            },
            tugas: {
                connect: { id: tugasId },
            },
            fileUrl: fileUrl ?? null, // ⚠️ PENTING
            linkUrl: linkUrl ?? null, // ⚠️ PENTING
            status: "pending",
            submittedAt: new Date(),
        };
        return this.repo.create(data);
    }
    updateStatus = async (id, status) => {
        return this.repo.update(id, { status });
    };
    softDelete = async (id) => {
        return this.repo.softDelete(id);
    };
    restore = async (id) => {
        return this.repo.restore(id);
    };
    findArsipForPengajar = async (pengajarId) => {
        return this.repo.findArsipForPengajar(pengajarId);
    };
}
//# sourceMappingURL=submission.service.js.map