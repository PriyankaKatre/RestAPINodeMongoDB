import express from "express";
import dotEnv from "dotenv";
import routes from "./routes/products.js";
import { connectDB } from "./db/connect.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotEnv.config({ path: "./.env" });
app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

app.use("/api/products", routes);
console.log("fsdfsdf", process.env.MONGODB_URL);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log("express server started");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
