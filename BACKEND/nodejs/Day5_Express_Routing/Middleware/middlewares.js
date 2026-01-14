const express = require('express')
const app = express()
const route= require('./routes/route')
const port =8080

/// Loading middleware into app 
app.use(express.json());  // It allows Express to understand JSON data coming in the request body.
app.use('/api',route);


///// Creating custom middlewares (Application level middelware)

const LoggingMiddleware = function(req,res,next){
    console.log("Logging Start");
    next();
};

const AuthMiddleware=function(req,res,next){
    console.log("Doing Authentication");
    //res.send("Go your Home")
    next();
};

const validation=function(req,res,next){
    console.log("Doing Validation");
    next();
    
};

 // Loading middleware in app (ALso we add secquence of order)
app.use(LoggingMiddleware); 
app.use(AuthMiddleware);
app.use(validation);

app.get('/', (req,res)=>{
    console.log(req.body)   // JSON convert into javascript object
    res.send('Hello Everyone !')
})

app.listen(port, ()=>{
    console.log(`App listning on port ${port}`)
})