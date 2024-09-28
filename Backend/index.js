import express ,{urlencoded} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoutes.js"

dotenv.config({})


const app = express();
const PORT=process.env.PORT || 3000;

// app.get("/",(req,res)=>{input
//     return res.status(200).json({
//         message:"I'm coming from backend",
//         success:true
//     })
// })

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOption = {
    origin:"http://localhost:5173",
    credentials:true
}
app.use(cors(corsOption))
app.use("/api/v1/user",userRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`server listen at port ${PORT}`);

})