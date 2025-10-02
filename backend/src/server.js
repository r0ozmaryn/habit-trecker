import express from "express";
import cors from "cors";
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({message: "Привіт з бекенду!"});
});

// route connecting
import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Сервер працює на http://localhost:${PORT}`);
});