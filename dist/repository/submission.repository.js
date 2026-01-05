export class SubmissionRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // CREATE SUBMISSION
    async create(data) {
        return this.prisma.submission.create({
            data,
        });
    }
    // GET ALL SUBMISSION
    async findAll() {
        return this.prisma.submission.findMany({
            include: {
                user: true,
                tugas: true,
            },
        });
    }
    // GET SUBMISSION BY ID
    async findById(id) {
        return this.prisma.submission.findUnique({
            where: { id },
            include: {
                user: true,
                tugas: true,
            },
        });
    }
    // GET SUBMISSION BY USER
    async findByUser(userId) {
        return this.prisma.submission.findMany({
            where: { userId },
            include: {
                tugas: true,
            },
        });
    }
    // GET SUBMISSION BY TUGAS
    async findByTugas(tugasId) {
        return this.prisma.submission.findMany({
            where: { tugasId },
            include: {
                user: true,
            },
        });
    }
    // UPDATE STATUS / FILE
    async update(id, data) {
        return this.prisma.submission.update({
            where: { id },
            data,
        });
    }
    // DELETE SUBMISSION
    async delete(id) {
        return this.prisma.submission.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=submission.repository.js.map