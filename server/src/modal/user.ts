import mongoose from "mongoose";
interface UserIf{
  name: String;
  photo:String;
  bio: String;
  phone:Number;
}

const Schema =mongoose.Schema<User>({
  name:{
    type: String,
    default:""
  },
  photo:{
    //default should use the use the email firstand second letter as averta
    type: String,
    default:""
  },
  bio:{
    type: String,
    default:""
  },
  phone:{
    type: Number,
    default:null
  },
})

const User =mongoose.model<UserIf>("user_model",Schema);

export default User