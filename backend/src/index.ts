import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { connectDB } from "./models/connect";

const PORT = process.env.Port || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("api/v1/user");
app.use("api/v1/todo");

app.listen(async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
