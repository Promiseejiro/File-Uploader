import express from "express";
import cors from "cors";
import router from "./route/routes";
import connectDb from "./db/db";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });

const app = express();
const port = process.env["PORT "] || 2000;
const mongodbUrl = process.env["MONGODB_URI"];
// check if the env is set, remember to delete this
console.log(process.env[`MONGODB_URI`]);

//medeware
app.use(cors());
app.use("/", router);
app.listen(port, (): void => {
  connectDb(mongodbUrl!);
  console.log("app is listenig on port 2000");
});
