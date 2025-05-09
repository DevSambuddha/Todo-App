import mongoose from "mongoose";

import { MONGO_URL } from "../config/config";

export const connectDB = async () => {
  await mongoose.connect(MONGO_URL);
  console.log("Connected to database!");
};
