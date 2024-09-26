import mongoose, { Mongoose } from "mongoose";

const commentSchema = new mongoose.Schema({
    text:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,  ref:"User",required:true},
    post:{type:mongoose.Schema.Types.ObjectId,  ref:"User", required:true}
})
export default commentSchema = mongoose.model("Comment",commentSchema)