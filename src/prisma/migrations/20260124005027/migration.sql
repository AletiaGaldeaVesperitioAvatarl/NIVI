/*
  Warnings:

  - You are about to drop the column `activationToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[kelasId,tanggal]` on the table `JadwalAbsensi` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "activationToken",
ADD COLUMN     "otp" TEXT,
ADD COLUMN     "otpExpiresAt" TIMESTAMP(3),
ALTER COLUMN "name" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "JadwalAbsensi_kelasId_tanggal_key" ON "JadwalAbsensi"("kelasId", "tanggal");
