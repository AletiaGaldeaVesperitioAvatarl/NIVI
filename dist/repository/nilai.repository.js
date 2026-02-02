export class NilaiRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.nilai.findMany({
            include: {
                submission: {
                    include: {
                        user: true,
                        tugas: true,
                    },
                },
            },
        });
    }
    findBySubmissionId(submissionId) {
        return this.prisma.nilai.findUnique({
            where: { submissionId },
        });
    }
    create(data) {
        return this.prisma.nilai.create({ data });
    }
    update(submissionId, data) {
        return this.prisma.nilai.update({
            where: { submissionId },
            data,
        });
    }
    delete(submissionId) {
        return this.prisma.nilai.delete({
            where: { submissionId },
        });
    }
}
//# sourceMappingURL=nilai.repository.js.map