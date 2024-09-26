import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    ProfilePicture:{type:String,default:""},
    bio:{type:String,default:""},
    gender:{type:String,enum:["male","female"]},
    followers:[{
        type:mongoose.Schema.Types.ObjectId, ref:"user"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId, ref:"user"
    }],
    posts:[{
        type:mongoose.Schema.Types.ObjectId, ref:"Post"
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId, ref:"Post"
    }],
},{timestamps:true});

export const user = mongoose.model("User",userSchema);