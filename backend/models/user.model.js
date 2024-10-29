import { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    email :{
        type:string,
        required:true,
        unique:true 
    },
    password :{
        type : string,
        required :true
    },
    name:{
        type:string,
        required : true
    },
    lastLogin :{
        type:Date,
        default: Date.now
    },
    isVerified :{
        type : boolean,
        default : false
    },
    resetPasswordToken :String,
    resetPasswordExpiresAt : Date,
    verificationToken : String,
    verificationTokenExpiresAt : Date,
},{timestamps:true});

const User = Mongoose.model('User',userSchema);

export default User;

