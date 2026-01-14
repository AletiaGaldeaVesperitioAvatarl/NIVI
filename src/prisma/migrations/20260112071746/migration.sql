-- AlterTable
ALTER TABLE "User" ADD COLUMN     "activatedAt" TIMESTAMP(3),
ADD COLUMN     "activationToken" TEXT,
ALTER COLUMN "password" DROP NOT NULL;
