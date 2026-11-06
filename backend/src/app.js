import express from "express";
import healthRouter from "./routes/health.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();

app.disable("x-powered-by");
app.use(express.json());
app.use("/api/health", healthRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
