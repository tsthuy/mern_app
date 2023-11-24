import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import AuthUser from "./routes/auth.route.js";
dotenv.config();
const app = express();

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect to the mongo DB successfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(4000, () => {
  console.log("Sever is running in port: localhost: 4000!!! ");
});

app.use("/api/user", userRouter);
app.use("/api/auth", AuthUser);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
