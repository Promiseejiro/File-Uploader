import express from "express";
//import router from "./route/route";
import cors from "cors";
import bodyParser from "body-parser";
import connectDb from "./db/index";
const port = 7000;
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.get("/",(req: express.Reques,res: express.Response)=>{
  res.send({message:"working"})
})
app.listen(port, () => {
  connectDb('mongodb+srv://my-unsplash:4128@cluster0.zr1pucn.mongodb.net/');
  console.log(`server is listening on port ${port}`);
});
