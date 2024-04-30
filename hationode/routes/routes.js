const express=require('express');
const router=express.Router();
const {createproject,getprojects,loginuser}=require('../controller/project.controller.js')
const validate=require("../Auth/Validate.js")

router.post('/create',validate,createproject);
router.get('/getproject',validate,getprojects);
router.post('/login',loginuser)


module.exports=router;