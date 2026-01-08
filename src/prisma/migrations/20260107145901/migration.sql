/*
  Warnings:

  - The values [tepat_waktu,terlambat] on the enum `StatusSubmission` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "StatusAbsensi" ADD VALUE 'sakit';

-- AlterEnum
BEGIN;
CREATE TYPE "StatusSubmission_new" AS ENUM ('pending', 'submitted', 'reviewed', 'rejected');
ALTER TABLE "Submission" ALTER COLUMN "status" TYPE "StatusSubmission_new" USING ("status"::text::"StatusSubmission_new");
ALTER TYPE "StatusSubmission" RENAME TO "StatusSubmission_old";
ALTER TYPE "StatusSubmission_new" RENAME TO "StatusSubmission";
DROP TYPE "public"."StatusSubmission_old";
COMMIT;
