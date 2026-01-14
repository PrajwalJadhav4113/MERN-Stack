const express = require('express');
const app = express();
require('dotenv').config()
const PORT = 8081

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
res.send("HEy")
})

app.get('/create',async(req,res)=>{
   let creteduser = await userModel.create({
    name:"Pajwal",
    email:"prajawcsnf69@gmail.com",
    username:"harsh"
   })
   res.send(creteduser);
})

app.get('/update',async(req,res)=>{ 
   let updateduser = await userModel.findOneAndUpdate({username: "harsh"},{name:"Prajwal Samadhan Jadhav"},{new:true})

   res.send(updateduser);
})

app.get('/read',async(req,res)=>{ 
   let readuser = await userModel.find()

   res.send(readuser);
})

app.get('/delete',async(req,res)=>{ 
   let user = await userModel.findOneAndDelete({username: "harsh"})

   res.send(user);
})



app.listen(process.env.PORT,()=>{
    console.log(`Listning on port ${PORT}`)
});