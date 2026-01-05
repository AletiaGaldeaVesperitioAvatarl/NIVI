import Express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { successResponse } from "./utils/response";
import { errorHandler } from "./middlewares/error.handler";
import { requestLogger } from "./middlewares/logger.middleware";
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from "./utils/swagger";
const app = Express();
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(Express.json());
app.set('query parser', 'extended');
app.use(Express.static("public"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(requestLogger);
app.get("/", (req, res) => {
    const waktuProses = Date.now() - (req.startTime || Date.now());
    successResponse(res, "Selamat datang di API perpustakaan saya !!", {
        hari: 6,
        status: "Server Hidup",
        waktuProses: `${waktuProses}ms`
    }, null, 200);
});
app.use(/.*/, (req, _res) => {
    throw new Error(`Route ${req.originalUrl} tidak ada di API`);
});
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map