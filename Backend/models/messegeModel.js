import mongoose, { mongo } from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{type:mongoose.Schema.Types.ObjectId,  ref:"User" },
receiverId:{type:mongoose.Schema.Types.ObjectId,  ref:"User" },

messege:{
    type:String,
    required:true
}
});

export default Message = mongoose.model("Message", messageSchema )
