import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

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
