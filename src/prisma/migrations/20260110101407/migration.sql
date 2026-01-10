/*
  Warnings:

  - A unique constraint covering the columns `[tugasId,userId]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Submission_tugasId_userId_key" ON "Submission"("tugasId", "userId");
