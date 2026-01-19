-- CreateEnum
CREATE TYPE "Hari" AS ENUM ('senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu');

-- AlterTable
ALTER TABLE "Absensi" ADD COLUMN     "jadwalId" INTEGER;

-- CreateTable
CREATE TABLE "JadwalAbsensi" (
    "id" SERIAL NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "hari" "Hari" NOT NULL,
    "jamMulai" TEXT NOT NULL,
    "jamSelesai" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JadwalAbsensi_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES "JadwalAbsensi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JadwalAbsensi" ADD CONSTRAINT "JadwalAbsensi_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
