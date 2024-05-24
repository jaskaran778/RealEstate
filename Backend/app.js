import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import colors from "colors";
import userRoutes from "./Routes/userRoutes.js";
import authRoutes from "./Routes/authRoutes.js";
import listingRoutes from "./Routes/listingRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`MongoDb Is Connected`.green.underline);
  })
  .catch((error) => console.log(`Error Occured : ${error}`));

const app = express();
const PORT = process.env.PORT || 469;
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/route/user", userRoutes);
app.use("/route/auth", authRoutes);
app.use("/route/listing", listingRoutes);

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(
    `App Wants to go to  Lado Sarai Firni Road : ${PORT}`.blue.italic
  );
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
