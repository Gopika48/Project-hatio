const jwt=require("jsonwebtoken");




const validatetoken=async(req,res,next)=>{
   let token;
    let authheader=req.headers.Authorization||req.headers.authorization;
    console.log(authheader)
    if(authheader)
    {

    console.log(typeof(authheader))
 token=authheader.split(" ")[1]
 console.log(token)

 

     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>
        {
           
            if(err)
            {
                console.log(err)
                res.status(401);
                throw new Error("user not authorised");
            }
           
            req.user=decoded.user;
         
            next();
           


        })
        if(!token)
        {
 res.status(401);
throw new Error("User is not authorised");
        
        }
    }
    else{
        res.status(401);
        throw new Error("Login to continue")

    }

    }
module.exports=validatetoken;


