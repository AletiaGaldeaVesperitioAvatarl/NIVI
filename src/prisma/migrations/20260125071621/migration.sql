/*
  Warnings:

  - A unique constraint covering the columns `[userId,tugasId]` on the table `Submission` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Submission_tugasId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Submission_userId_tugasId_key" ON "Submission"("userId", "tugasId");
