/*
  Warnings:

  - Made the column `tanggal` on table `JadwalAbsensi` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JadwalAbsensi" ALTER COLUMN "tanggal" SET NOT NULL;
