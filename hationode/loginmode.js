const mongoose=require('mongoose');

const loginschema=new mongoose.Schema({
emailId:{type:String,required:true},
passoword:{type:Number,required:true},

}
)
module.exports=mongoose.model('login',loginschema);