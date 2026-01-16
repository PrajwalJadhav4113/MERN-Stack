import mongoose from "mongoose";

const todoSchema= new mongoose.Schema({
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

subTodos:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
    }
]   // Array of subtodos

},
{timestamps:true}
);


export const Todo = mongoose.model('Todo' , todoSchema);
