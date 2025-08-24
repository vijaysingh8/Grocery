import jwt from "jsonwebtoken";
export const authUser=(req,res,next)=>{
    const {token}=req.cookies;
        if(!token){
            return res.status(401).json({message:"Unauthorized",success:false});
          
        }
    try {
        //  console.log("token received")
        // const decoded=jwt.verify(token,process.env.JWT_SECRET);
        // req.user=decoded.id;
        // next();
    
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded.id;
  next();

    } catch (error) {
        console.error("Authentication error:",error);
        return res.status(401).json({message:"Unauthorized",success:false});

    }
};
