import Express,{ type Application, type Request, type Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import { requestLogger } from "./middlewares/logger.middleware";
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from "./utils/swagger";
import authRoute from "./routes/auth.route"
import userRoute from "./routes/user.route"
import absensiRoute from "./routes/absensi.route"
import tugasRoute from "./routes/tugas.route"



const app: Application = Express()

app.use(helmet())
app.use(morgan("dev"))
app.use(cors({
  origin: "http://localhost:5000",
}))
app.use(Express.json());
app.set('query parser', 'extended')
app.use(Express.static("public"))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))


app.use(requestLogger);  
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/absensi", absensiRoute)
app.use("/api/tugas", tugasRoute)


app.get("/", (req: Request, res: Response) => {
  const waktuProses = Date.now() - (req.startTime || Date.now());
  successResponse(res, "Selamat datang di API perpustakaan saya !!", {
    hari: 6,
    status: "Server Hidup",
    waktuProses: `${waktuProses}ms`
  }, null, 200)
});


app.use(/.*/, (req: Request, _res: Response) => {
  throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});

app.use(errorHandler);


export default app