import { Conversation } from "../models/conversationModel";

export const sendMessage = async (req,res)=>{
    try {
       const senderId = req.id;
       const recieiverId=req.params.id;
       const {message} = req.body

       let conversation= await Conversation.findOne({
        participants:{$all:[senderId,recieiverId]}
       });
       //establish the conversation
       
       if(!conversation){
        conversation=await Conversation.create({
            participants:[senderId,recieiverId]
        })
       };
       const newMessage = await Message.create({
        senderId,recieiverId,message
       });
       if(newMessage) conversation.messages.push(newMessage._id);
       await Promise.all([conversation.save(),newMessage.save()])
       
       return res.status(201).json({
        success:true,
        newMessage
       })
    } catch (error) {
        console.log(error)
    }
}

export const getMessage = async (req,res)=>{
    try {
        const senderId = req.id;
        const recieiverId=req.params.id;
        const conversation = await Conversation.find({
            participants:{$all:[senderId,recieiverId]}
        })
        if(!conversation) return res.status(200).json({success:true,message:[]})

            return res.status(200).json({succes:true, message:conversation?.message})
    } catch (error) {
        console.log(error);
        
    }
}