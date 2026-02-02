export class AbsensiSettingRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    getByKelas(kelasId) {
        return this.prisma.absensiSetting.findUnique({ where: { kelasId } });
    }
    create(kelasId, maxAbsen) {
        return this.prisma.absensiSetting.create({
            data: { kelasId, maxAbsen },
        });
    }
    updateByKelas(kelasId, maxAbsen) {
        return this.prisma.absensiSetting.update({
            where: { kelasId },
            data: { maxAbsen },
        });
    }
    updateById(id, maxAbsen) {
        return this.prisma.absensiSetting.update({
            where: { id },
            data: { maxAbsen },
        });
    }
    getAll() {
        return this.prisma.absensiSetting.findMany({ include: { kelas: true } });
    }
}
//# sourceMappingURL=absensiSetting.repository.js.map