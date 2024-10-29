import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();


app.use("/api/auth",authRoutes);

const startServer = async () => 
{
    try
    {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Server is running on port : ${PORT}`);
        })
    }catch(error)
    {
        console.error(error);
        process.exit(1);
    }
}

startServer();


