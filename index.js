import express from "express";
import "dotenv/config";
import db from "./config/db.connection.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 1337;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running");
  db();
});
