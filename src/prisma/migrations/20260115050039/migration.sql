/*
  Warnings:

  - Added the required column `mataPelajaranId` to the `Tugas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Absensi" DROP CONSTRAINT "Absensi_mataPelajaranId_fkey";

-- AlterTable
ALTER TABLE "Tugas" ADD COLUMN     "mataPelajaranId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Tugas" ADD CONSTRAINT "Tugas_mataPelajaranId_fkey" FOREIGN KEY ("mataPelajaranId") REFERENCES "MataPelajaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
