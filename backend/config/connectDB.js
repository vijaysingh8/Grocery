import mongoose,{mongo} from "mongoose";
export const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI);
       console.log("connected db");
    } catch(error){
        console.log("Error connecting to MongoDB",error);
        process.exit(1);
    }
    
};