import Express from "express";
import Auth from "../modal/auth";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import  validator  from 'validator';
import nodemailer from "nodemailer"
/*import passport from 'passport';
import LocalStrategy from "passport-local";
*/
export const register = async(req:Express.Request, res:Express.Response,next:any)=>{
  const {email,password} =await req.body
  if(!email || !password){
   res.send({message:"email and password is required"})
  }
  else {
   const validate =await validator.isEmail(email);
   if(validate){
     try{
      const UserExist =await Auth.findOne({email});
      if(UserExist){
        res.send({message:"user with this email already exist"})
      }else{
        const newUser = Auth.create({
      ...req.body
    });
  const token =await jwt.sign({
email:email,
  },  "JwtSecrete",
  {
  expiresIn:"1h"
  });
  res.status(200).send({
    token
  });
      }
  }catch(error){
     console.log(error)
    }
    
   }else{
     res.send({
       message:"Invalid email"
     })
   }}
}
export const login=async (req:Express.Request,res:Express.Response)=>{
const {email,password} = req.body
  if(!email || !password){
    res.send({
      message:"Email and password is required"
    })
  }
  else{
    try{
      const user= await Auth.findOne({email});
      if(user){
        
        const passwordMatch =await bcrypt.compare(password,user.password,)
       if(passwordMatch){
          const token =await jwt.sign({email:email},  "JwtSecrete",{expiresIn:"1h"});
       res.status(200).send({
         email,token
  });    }
 else{
    res.send({
    message:"incorrect password"
         })
       }
      }
      else{
        res.send({message:"this email doesn't exist"});
      }
    }catch(error){
      console.log(error)
    }
  }
}

export const emailVerification =async(req: Express.Request,res:Express.Response)=>{
  const {email} = await req.body;
  const user = await Auth.findOne({ email})
  if(user){
    const encryptedToken = await bcrypt.hash(user.email.toString(), 8);
    const jwtToken = jwt.sign({ userId: user._id }, "JwtSecrete", {
      expiresIn: "60m",
    });
 
    const testaccount =await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({host:"smtp.ethereal.email",port: 587,
  secure: false,
  auth: {
    user: testaccount.user,
    pass: testaccount.pass
  }
});
const mailOptions = {
  from: testaccount.user,
  to: 'promiseemosivbe43@gmail.com',
  subject: 'authentication-app',
  text: 'emailVerification enter maill'
}
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
 console.log("error")
  } else {
    console.log("sending")
    res.send('Email sent: ' + info.response);
    // do something useful
  }
})
  }
}

