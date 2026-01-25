/*
  Warnings:

  - A unique constraint covering the columns `[userId,tugasId]` on the table `Nilai` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Nilai_userId_tugasId_key" ON "Nilai"("userId", "tugasId");
