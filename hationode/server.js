const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/routes');
var cors=require('cors');
const app=express();

require('dotenv').config()
app.use(cors());
const mongostring=process.env.mongourl;
mongoose.connect(mongostring);
const database=mongoose.connection
database.on('error',(error)=>{
    console.log(error);
})
database.once('connected',()=>{console.log('Database Connected')})
app.use(express.json())
app.use('/api/project',routes)

app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
});