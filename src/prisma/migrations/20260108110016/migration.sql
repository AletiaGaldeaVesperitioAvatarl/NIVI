/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Kelas` table. All the data in the column will be lost.
  - You are about to drop the column `deskripsi` on the `Kelas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kelas" DROP COLUMN "createdAt",
DROP COLUMN "deskripsi";

-- CreateTable
CREATE TABLE "_PengajarKelas" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PengajarKelas_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PengajarKelas_B_index" ON "_PengajarKelas"("B");

-- AddForeignKey
ALTER TABLE "_PengajarKelas" ADD CONSTRAINT "_PengajarKelas_A_fkey" FOREIGN KEY ("A") REFERENCES "Kelas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PengajarKelas" ADD CONSTRAINT "_PengajarKelas_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
