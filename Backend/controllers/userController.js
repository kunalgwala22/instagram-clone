import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register =async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        if(!username||!email||!password){
            return res.status(401).json({
                message:"something went wrong",
                success:false,
            })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(401).json({
                message:"try another email",
                success:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,10)
        await User.create({
            username,
            email,
            password:hashedPassword
        })
        return res.status(201).json({
            message:"account created successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}
export const login =async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email||!password){
            return res.status(401).json({
                message:"Something is missing,please check",
                success:false
            })

        }
        let user = await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"incorrect email or password",
                success:false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(401).json({
                message:"incorrect email or password",
                success:false
            })
        }

        const token =await jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:"1d"}) 
        user ={
            _id:user._id,
            username:user.username,
            email:user.email,
        }
        return res.cookie("token",token,{httpOnly:true,sameSite:"strict",maxAge:1*24*60*60*1000}).json({
            message:`welcome back ${user.username}`,
            success:true,
            user
        })
    } catch (error) {
        console.log(error)
    }
}
 export const logout =async (_,res)=>{
    try {
        return res.cookie("token","",{maxAge:0}).json({
            message:"Logout Successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
 };
 