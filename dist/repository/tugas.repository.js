export class TugasRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // GET ALL TUGAS
    getAll = async () => {
        return this.prisma.tugas.findMany({
            include: {
                kelas: true, // relasi ke Kelas
                creator: true, // relasi ke User yang buat tugas
                submission: true, // relasi ke submission
                nilai: true // relasi ke nilai
            },
        });
    };
    // GET TUGAS BY ID
    getById = async (id) => {
        return this.prisma.tugas.findFirst({
            where: { id },
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            },
        });
    };
    // CREATE NEW TUGAS
    create = async (data) => {
        return this.prisma.tugas.create({
            data,
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            }
        });
    };
    // UPDATE TUGAS
    update = async (id, data) => {
        return this.prisma.tugas.update({
            where: { id },
            data,
            include: {
                kelas: true,
                creator: true,
                submission: true,
                nilai: true
            }
        });
    };
    // DELETE TUGAS
    delete = async (id) => {
        return this.prisma.tugas.delete({
            where: { id },
        });
    };
    async getTasksWithSubmission(userId) {
        const tugas = await this.prisma.tugas.findMany({
            include: {
                submission: {
                    where: { userId },
                    take: 1,
                },
            },
            orderBy: { deadline: 'asc' },
        });
        return tugas.map(t => {
            const submission = t.submission[0];
            return {
                id: t.id,
                title: t.title,
                description: t.description,
                deadline: t.deadline,
                status: submission ? submission.status : 'pending',
                submission_link: submission?.linkUrl ?? null,
                submitted_at: submission?.submittedAt ?? null,
            };
        });
    }
}
//# sourceMappingURL=tugas.repository.js.map