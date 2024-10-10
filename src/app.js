import express from "express";
import index_router from "./routes/index.router.js";
const app = express();

app.use(index_router);

export default app;