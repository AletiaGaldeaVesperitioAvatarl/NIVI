import request from "supertest";
import app from "../app";

describe("IZIN API", () => {
  const state = {
    token: "",
    userId: 0,
    izinId: 0,
  };

  const userData = {
    name: "Santri Izin",
    email: `izin_${Date.now()}@gmail.com`,
    password: "password123",
  };

  // ======================
  // SETUP USER + LOGIN
  // ======================
  beforeAll(async () => {
    const registerRes = await request(app)
      .post("/api/auth/register")
      .send(userData);

    state.userId = registerRes.body.data.id;

    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({
        email: userData.email,
        password: userData.password,
      });

    state.token = loginRes.body.data.token;
  });

  // ======================
  // CREATE IZIN
  // ======================
  it("santri berhasil mengajukan izin", async () => {
    const res = await request(app)
      .post("/api/absensi/izin")
      .set("Authorization", `Bearer ${state.token}`)
      .send({
        tanggal: "2026-01-07",
        alasan: "Sakit bre",
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data.status).toBe("pending");

    state.izinId = res.body.data.id;
  });

  // ======================
  // GET IZIN MILIK SENDIRI
  // ======================
  it("santri bisa lihat izin sendiri", async () => {
    const res = await request(app)
      .get("/api/absensi/izin/me")
      .set("Authorization", `Bearer ${state.token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  // ======================
  // DUPLICATE IZIN (OPTIONAL)
  // ======================
  it("gagal mengajukan izin di tanggal yang sama", async () => {
    const res = await request(app)
      .post("/api/absensi/izin")
      .set("Authorization", `Bearer ${state.token}`)
      .send({
        tanggal: "2026-01-07",
        alasan: "Izin lagi bre",
      });

    expect(res.status).toBe(400);
  });
});
