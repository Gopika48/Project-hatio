const express=require('express');
const Project=require('../projectmodel');
const login =require('../loginmode')

const createproject =async(req,res)=>{
    const{UniqueId,Title,CreatedDate,Listoftodos,
        Todo}=req.body;
 const project=await Project.create({UniqueId,Title,CreatedDate,Listoftodos,Todo})
if(project)
{
    res.status(201).json({message:"Registered"})
}
else{
    throw new error(error);
}



   
    res.json("created");
    res.send("Saved")
}

const getprojects=async(req,res)=>{
    try{
    const project=await Project.find(req.query);
    res.status(200).json(project);
    }
    catch(error){
        console.error(error);
        res.status(200).json({message:"server error"});

    }
}
const loginuser=async(req,res)=>{
    const{email,password}=req.body;
    const user=await login.findOne({email});
   if(user){
    const accesstoken=jwt.sign({
        user:{
            email:user.email,
            password:user.password
  },},
        process.env.ACCESS_TOKEN_SECRET,{expiresIn:"10m"})
        res.status(200).json({accesstoken});

}
else{
    res.status(401);
    throw new Error("Not valid")
}}




module.exports={createproject,getprojects,loginuser}