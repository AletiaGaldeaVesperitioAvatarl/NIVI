import Express, {
  type Application,
  type Request,
  type Response,
} from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import { requestLogger } from "./middlewares/logger.middleware";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./utils/swagger";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import absensiRoute from "./routes/absensi.route";
import tugasRoute from "./routes/tugas.route";
import kelasRoute from "./routes/kelas.routes";
import submissionRoute from "./routes/submission.route";

import nilaiRoute from "./routes/nilai.route";
import profileRoute from "./routes/profile.route";
import LogAktivitasRoute from "./routes/logAktivitas.route";

import pengajarRouter from "./routes/pengajar.route";
import halamanRouter from "./routes/dashboard/p-dashboard.route";
import PanelRouter from "./routes/dashboard/a.dashboard.route";

import AdminRouter from "./routes/admin.route";




const app: Application = Express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set("query parser", "extended");
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
app.use("api/LogAktivitasRoute", LogAktivitasRoute);
app.use("/api/pengajar", pengajarRouter);
app.use("/api/halaman", halamanRouter);
app.use("/api/panel", PanelRouter);
app.use("/api/admin", AdminRouter);


app.get("/", (req: Request, res: Response) => {
  const waktuProses = Date.now() - (req.startTime || Date.now());
  successResponse(
    res,
    "Selamat datang api NIVI!!",
    {
      status: "Server Hidup",
      waktuProses: `${waktuProses}ms`,
    },
    null,
    200
  );
});

app.use(/.*/, (req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});

app.use(errorHandler);

export default app;
