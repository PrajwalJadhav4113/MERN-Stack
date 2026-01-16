import mongoose from "mongoose";

const SubTodoSchema= new mongoose.Schema({
content:{
    type:String,
    require:true,
},

complete:{
    type:Boolean,
    default:false
},

createdBy:{
    type:mongoose.Schema.Types.ObjectId, //it used when we need to join another schema
    ref:"User" // here write what we expoted
},



},
{timestamps:true}
)


export const SubTodo = mongoose.model('SubTodo' , SubTodoSchema)
