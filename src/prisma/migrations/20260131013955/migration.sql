/*
  Warnings:

  - You are about to drop the column `deleteAt` on the `Izin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Izin" DROP COLUMN "deleteAt",
ADD COLUMN     "deletedAt" TIMESTAMP(3);
