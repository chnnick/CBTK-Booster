import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import joinRoutes from "./routes/joinRoute.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

const __dirname = path.resolve();

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve.apply(__dirname, "frontend", "dist", "index.html"));
  })
}

app.post("/", joinRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
})