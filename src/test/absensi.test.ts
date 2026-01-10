import request from "supertest"
import app from "../app"

describe ("ABSENSI API", () => {
    const state = {
        token: "",
        userId: 0,
    };

    const userData = {
        name: "Santri Test",
        email: `santri_${Date.now()}@gmail.com`,
        password: "password123",
    };

    //SETUP: REGISTER + LOGIN
    beforeAll(async() => {
        const registerRes = await request(app)

        .post("/api/auth/register")
        .send(userData)

        state.userId = registerRes.body.data.id;

        const loginRes = await request(app)
        .post ("/api/auth/login")
        .send({
            email: userData.email,
            password: userData.password,
        });
        state.token = loginRes.body.data.token
    });

    //DATA ABSEN HERU INI 
    it("berhasil absen hari ini", async() => {
        const res = await request(app)
        .post("/api/absensi/me/absen")
        .set("Authorizatiion", `Barear ${state.token}`)
        .send({
            kelasId: 1,
            status: "hadir",
        });

        expect(res.status).toBe(201);
        expect(res.body.success).toBe(true);
    });

    //GET DATA ABSENSI HARI INI
    it ("ambil absensi hari ini", async () => {
        const res = await request(app)
        .get("/api/absensi/me/today")
        .set("Authorization", `Barear ${state.token}`);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true)
    });

    //GET ABSENSI BY USER 
    it("megambil absesni by user id", async () => {
        const res = await request(app)
        .get("/api/absensi/user/${state.userId");

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.data)).toBe(true)
    })
})