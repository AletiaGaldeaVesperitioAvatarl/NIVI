-- CreateTable
CREATE TABLE "AbsensiSetting" (
    "id" SERIAL NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "maxAbsen" INTEGER NOT NULL DEFAULT 2,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AbsensiSetting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AbsensiSetting_kelasId_key" ON "AbsensiSetting"("kelasId");

-- AddForeignKey
ALTER TABLE "AbsensiSetting" ADD CONSTRAINT "AbsensiSetting_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
