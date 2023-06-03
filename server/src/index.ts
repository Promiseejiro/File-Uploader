import express from "express";
import bodyParser from "body-parser"
import cors from "cors";
const  session = require("express-session")
import passport from "passport"
import router from "./route/routes";
import connectDb from "./db/db";
import Auth from "./modal/auth";
const port = 2000;
const app = express();
//medewares
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: "promise",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);

app.listen(port, () => {
  connectDb("mongodb+srv://promise:4128@cluster0.x9stvxh.mongodb.net/");
  console.log('Server started on port 2000');
});