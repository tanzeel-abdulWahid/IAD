import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

mongoose.set("strictQuery", false);

const PORT = process.env.PORT || 5000;

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected");
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/client", clientRoutes);

app.listen(PORT, () => {
  connect();
  console.log("Connected to Getstake Server at port", PORT);
});
