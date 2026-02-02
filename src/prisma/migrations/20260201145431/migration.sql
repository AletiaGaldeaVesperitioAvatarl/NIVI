/*
  Warnings:

  - A unique constraint covering the columns `[kelasId,tanggal,jamMulai]` on the table `JadwalAbsensi` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "JadwalAbsensi_kelasId_tanggal_key";

-- CreateIndex
CREATE UNIQUE INDEX "JadwalAbsensi_kelasId_tanggal_jamMulai_key" ON "JadwalAbsensi"("kelasId", "tanggal", "jamMulai");
