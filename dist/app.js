import Express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response.js";
import { errorHandler } from "./middlewares/error.handler.js";
import { requestLogger } from "./middlewares/logger.middleware.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import absensiRoute from "./routes/absensi.route.js";
import tugasRoute from "./routes/tugas.route.js";
import kelasRoute from "./routes/kelas.routes.js";
import submissionRoute from "./routes/submission.route.js";
import nilaiRoute from "./routes/nilai.route.js";
import profileRoute from "./routes/profile.route.js";
import LogAktivitasRoute from "./routes/logAktivitas.route.js";
import pengajarRouter from "./routes/pengajar.route.js";
import halamanRouter from "./routes/dashboard/p-dashboard.route.js";
import PanelRouter from "./routes/dashboard/a.dashboard.route.js";
import mapelRouter from "./routes/mataPelajaran.route.js";
import AdminRouter from "./routes/admin.route.js";
import jadwalRouter from "./routes/jadwalAbsen.route.js";
import absensiSettingRouter from "./routes/absensiSetting.route.js";
import izinRouter from "./routes/izin.route.js";
import automationRouter from "./routes/automation.route.js";
import path from "path";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(Express.json());
app.set("query parser", "extended");
app.use("/api/uploads", Express.static(path.join(process.cwd(), "public/uploads")));
app.use(Express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(requestLogger);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/absensi", absensiRoute);
app.use("/api/tugas", tugasRoute);
app.use("/api/kelas", kelasRoute);
app.use("/api/submission", submissionRoute);
app.use("/api/nilai", nilaiRoute);
app.use("/api/profile", profileRoute);
app.use("/api/LogAktivitasRoute", LogAktivitasRoute);
app.use("/api/pengajar", pengajarRouter);
app.use("/api/halaman", halamanRouter);
app.use("/api/panel", PanelRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/mapel", mapelRouter);
app.use("/api/jadwal", jadwalRouter);
app.use("/api/absensi-setting", absensiSettingRouter);
app.use("/api/izin", izinRouter);
app.use("/api/automation", automationRouter);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang api NIVI!!", {
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`,
    }, null, 200);
});
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map
