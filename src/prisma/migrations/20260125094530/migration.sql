/*
  Warnings:

  - The values [submitted] on the enum `StatusSubmission` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `tugasId` on the `Nilai` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Nilai` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[submissionId]` on the table `Nilai` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `submissionId` to the `Nilai` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatusSubmission_new" AS ENUM ('pending', 'reviewed', 'rejected');
ALTER TABLE "Submission" ALTER COLUMN "status" TYPE "StatusSubmission_new" USING ("status"::text::"StatusSubmission_new");
ALTER TYPE "StatusSubmission" RENAME TO "StatusSubmission_old";
ALTER TYPE "StatusSubmission_new" RENAME TO "StatusSubmission";
DROP TYPE "public"."StatusSubmission_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Nilai" DROP CONSTRAINT "Nilai_tugasId_fkey";

-- DropForeignKey
ALTER TABLE "Nilai" DROP CONSTRAINT "Nilai_userId_fkey";

-- DropIndex
DROP INDEX "Nilai_userId_tugasId_key";

-- AlterTable
ALTER TABLE "Nilai" DROP COLUMN "tugasId",
DROP COLUMN "userId",
ADD COLUMN     "submissionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Submission" ALTER COLUMN "status" SET DEFAULT 'pending';

-- CreateIndex
CREATE UNIQUE INDEX "Nilai_submissionId_key" ON "Nilai"("submissionId");

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
