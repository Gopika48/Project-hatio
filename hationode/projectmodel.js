const mongoose=require('mongoose');

const projectschema=new mongoose.Schema({
UniqueId:{type:Number,required:true},
Title:{type:String,required:true},
CreatedDate:{type:Date,required:true},
Listoftodos:[String],

Todo:[{
Id:{type:Number},
Desc:{type:String},
status:{type:Boolean},
TCreatedDate:{type:Date},
UpdatedDate:{type:Date}
}
]
})
module.exports=mongoose.model('Project',projectschema);