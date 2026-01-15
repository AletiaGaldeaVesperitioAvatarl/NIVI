/*
  Warnings:

  - You are about to drop the column `kelasId` on the `MataPelajaran` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MataPelajaran" DROP CONSTRAINT "MataPelajaran_kelasId_fkey";

-- DropForeignKey
ALTER TABLE "MataPelajaran" DROP CONSTRAINT "MataPelajaran_pengajarId_fkey";

-- AlterTable
ALTER TABLE "MataPelajaran" DROP COLUMN "kelasId";
