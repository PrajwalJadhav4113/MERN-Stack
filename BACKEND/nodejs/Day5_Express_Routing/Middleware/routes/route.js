const express = require('express')
const router = express.Router()

//Middleware

const auth = function(req,res,next){
    console.log("I am inside Auth Middleware");

    // create dummy user
    req.user= {userId:1, role:"teacher"};

    if(req.user){
          // if there are valid user then go to next middleware 
        next();
    }
    else{
        //if not a valid user 
        res.json({
            success:"false",
            message:"Not  a Valid User",
        })
    }
}

const isStudent =function(req,res,next){
    console.log("I am inside student Middleware");
    if(req.user.role ==="student"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access Denied, this is only for student"
        })
    }
}

const isTeacher = function(req,res,next){
    console.log("Im inside Teacher middleware");

    if(req.user.role==="teacher"){

        next();
    }
    else{

        res.json({
            success:false,
            message:"Access DEnide, this is only for Teacher"
        })
    }
}


////////////////////Router

router.get("/student" , auth,isStudent,(req,res)=>{
    console.log("Im inside student route");
    res.send("Student specific Page");
})

router.get("/teacher", auth,isTeacher,(req,res)=>{
    console.log("You are in Teacher route");
    res.send("Teacher Specific Page");
} )

module.exports =router;