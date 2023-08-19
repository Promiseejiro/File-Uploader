import express from "express";
import cors from "cors";
import router from "./route/routes";
import connectDb from "./db/db";
import dotenv from "dotenv";
dotenv.config();
const port = process.env["PORT"] || 8000;
const MONGU_URL = process.env["MONGU_URL"];
const app = express();
//medewares
app.use(cors());
app.use("/", router);
app.listen(port, (): void => {
  connectDb(MONGU_URL);
  console.log("app is listenig on port 8000");
});
