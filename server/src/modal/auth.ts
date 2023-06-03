import { Schema, model } from "mongoose";
var bcrypt = require('bcryptjs');
import jwt from "jsonwebtoken"
interface IAuth extends Document {
  email: string;
  password: string;
}


const schema = new Schema<IAuth>(
  {
    email: {
      type: String,
      required:[true,"please provide an email"],
      unique:true
      
    },
    password: {
      type: String,
      required:[true,"please provide a password"]
    },
  },
  { timestamps: true }
);
schema.pre<IAuth>('save', async function (next:any) {
    try {
     const saltRounds =bcrypt.genSaltSync(10)
  const   hashedPassword = await bcrypt.hashSync(this.password, saltRounds);
      this.password = hashedPassword;
    } catch (error) {
      return next(error);
    }
  next();
});
const Auth = model<IAuth>("user_model", schema);

export default Auth;