-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'pengajar', 'santri');

-- CreateEnum
CREATE TYPE "StatusAbsensi" AS ENUM ('hadir', 'izin', 'alpha');

-- CreateEnum
CREATE TYPE "StatusIzin" AS ENUM ('menunggu', 'disetujui', 'ditolak');

-- CreateEnum
CREATE TYPE "StatusSubmission" AS ENUM ('tepat_waktu', 'terlambat');

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "status" "StatusAbsensi" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Izin" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "alasan" TEXT NOT NULL,
    "status" "StatusIzin" NOT NULL DEFAULT 'menunggu',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Izin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" SERIAL NOT NULL,
    "namaKelas" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogAktivitas" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "aktivitas" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogAktivitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nilai" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tugasId" INTEGER NOT NULL,
    "nilai" INTEGER NOT NULL,
    "catatan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Nilai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "tugasId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "fileUrl" TEXT,
    "linkUrl" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusSubmission" NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tugas" (
    "id" SERIAL NOT NULL,
    "kelasId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "deadline" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tugas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "kelasId" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Izin" ADD CONSTRAINT "Izin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Izin" ADD CONSTRAINT "Izin_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogAktivitas" ADD CONSTRAINT "LogAktivitas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nilai" ADD CONSTRAINT "Nilai_tugasId_fkey" FOREIGN KEY ("tugasId") REFERENCES "Tugas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_tugasId_fkey" FOREIGN KEY ("tugasId") REFERENCES "Tugas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tugas" ADD CONSTRAINT "Tugas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tugas" ADD CONSTRAINT "Tugas_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
