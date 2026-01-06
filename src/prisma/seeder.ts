import prisma from "../database";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

async function main() {
  console.log("🌱 Seeding database...");

  /* ===============================
     CLEAN DATABASE
  =============================== */
  await prisma.logAktivitas.deleteMany();
  await prisma.nilai.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.absensi.deleteMany();
  await prisma.izin.deleteMany();
  await prisma.tugas.deleteMany();
  await prisma.user.deleteMany();
  await prisma.kelas.deleteMany();

  /* ===============================
     KELAS
  =============================== */
  const kelasData = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.kelas.create({
        data: {
          namaKelas: `Kelas ${faker.number.int({ min: 1, max: 12 })}`,
          deskripsi: faker.lorem.sentence(),
        },
      })
    )
  );

  /* ===============================
     user (ADMIN & SANTRI)
  =============================== */
  const password = await bcrypt.hash("password123", 10);

  // Admin
  const admin = await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@mail.com",
      password,
      role: "admin",
      isActive: true,
    },
  });

  // Santri
  const santri = await Promise.all(
    Array.from({ length: 30 }).map(() => {
      const kelas = faker.helpers.arrayElement(kelasData);
      return prisma.user.create({
        data: {
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password,
          role: "santri",
          kelasId: kelas.id,
          isActive: true,
        },
      });
    })
  );

  /* ===============================
     TUGAS
  =============================== */
  const tugasData = await Promise.all(
    kelasData.map((kelas) =>
      prisma.tugas.create({
        data: {
          kelasId: kelas.id,
          title: faker.lorem.words(3),
          description: faker.lorem.paragraph(),
          deadline: faker.date.soon({ days: 7 }),
          createdBy: admin.id,
        },
      })
    )
  );

  /* ===============================
     ABSENSI
  =============================== */
  for (const user of santri) {
    await prisma.absensi.create({
      data: {
        userId: user.id,
        kelasId: user.kelasId!,
        tanggal: faker.date.recent(),
        status: faker.helpers.arrayElement(["hadir", "izin", "alpha"]),
      },
    });
  }

  /* ===============================
     IZIN
  =============================== */
  for (let i = 0; i < 10; i++) {
    const user = faker.helpers.arrayElement(santri);
    await prisma.izin.create({
      data: {
        userId: user.id,
        kelasId: user.kelasId!,
        tanggal: faker.date.recent(),
        alasan: faker.lorem.sentence(),
        status: faker.helpers.arrayElement([
          "menunggu",
          "disetujui",
          "ditolak",
        ]),
      },
    });
  }

  /* ===============================
     submission
  =============================== */
  for (const tugas of tugasData) {
    for (const user of santri.filter((u) => u.kelasId === tugas.kelasId)) {
      await prisma.submission.create({
        data: {
          tugasId: tugas.id,
          userId: user.id,
          fileUrl: faker.internet.url(),
          linkUrl: faker.internet.url(),
          submittedAt: faker.date.recent(),
          status: faker.helpers.arrayElement(["tepat_waktu", "terlambat"]),
        },
      });
    }
  }

  /* ===============================
     NILAI
  =============================== */
  const submission = await prisma.submission.findMany();

  for (const sub of submission) {
    await prisma.nilai.create({
      data: {
        userId: sub.userId,
        tugasId: sub.tugasId,
        nilai: faker.number.int({ min: 60, max: 100 }),
        catatan: faker.lorem.sentence(),
      },
    });
  }

  /* ===============================
     LOG AKTIVITAS
  =============================== */
  for (const user of santri) {
    await prisma.logAktivitas.create({
      data: {
        userId: user.id,
        aktivitas: "Login ke sistem",
      },
    });
  }

  console.log("✅ Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
