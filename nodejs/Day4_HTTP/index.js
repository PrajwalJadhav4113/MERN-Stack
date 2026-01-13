const http=require("http");

const myServer = http.createServer((req,res)=>{
    console.log(req.head);  // What you want to write in terminal and req.header like that all thinks yo will do
    console.log(req);  // What you want to write in terminal and req.header like that all thinks yo will do
    res.end("Hello from Server Again");
});

myServer.listen(8000 , ()=>{
    console.log("Server Started !!") // it for us if all okay then it meassage show on terminal
});

//--------------------------------------------------
//------------- create log when incoming request are comes

const http=require("http");
const fs=require("fs");

const myServer3 = http.createServer((req,res)=>{
    const log = `${Date.now()}: New request recived\n`
    fs.appendFile("log.txt", log,(err,data)=>{
        res.end("Hello from Server Again");  // here is what we ant to dend on that port

    })
});

myServer3.listen(8001 , ()=>{
    console.log("Server Started !!");
});

//---------------------------Routing on PAges------------------------------

const http=require("http");
const fs=require("fs");

const myServer4 = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} New request recived\n`
    switch(req.url){
        case "/":
            res.end("Home PAge")
        break;
        case "/about":
            res.end("I am Prajwal");
            break;
            default:
                res.end("404 Not found")
            
        
    }
    fs.appendFile("log.txt", log,(err,data)=>{
        res.end("Hello from Server Again");  // here is what we ant to dend on that port

    })
});

myServer4.listen(8002 , ()=>{
    console.log("Server Started !!");
});

//--------------------------URL-------------------------

const http=require("http");
const fs=require("fs");
const url=require("url");

const myServer5 = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} New request recived\n`

    
    const myUrl = url.parse(req.url);
    console.log(myUrl); 

    switch(req.url){
        case "/":
            res.end("Home PAge")
        break;
        case "/about":
            res.end("I am Prajwal");
            break;
            default:
                res.end("404 Not found")
            
        
    }
    fs.appendFile("log.txt", log,(err,data)=>{
        res.end("Hello from Server Again");  // here is what we ant to dend on that port

    })
});

myServer5.listen(8003 , ()=>{
    console.log("Server Started !!");
});

//------------What you write on that search bar it write on page---------------------------------------

const http=require("http");
const fs=require("fs");
const url=require("url");

const myServer2 = http.createServer((req,res)=>{
    const log = `${Date.now()}:${req.url} New request recived\n`

    
    const myUrl = url.parse(req.url,true); // True for query parameter use
    console.log(myUrl); 

    switch(myUrl.pathname){
        case "/":
            res.end("Homme Page")
        break;
        case "/about":
            const username=myUrl.query.Name //that name we want  to write on the search bar
            res.end(`hallo ,  ${username}`);
            break;
            default:
                res.end("404 Not found")
            
        
    }
    fs.appendFile("log.txt", log,(err,data)=>{
        res.end("Hello from Server Again");  // here is what we ant to dend on that port

    })
});

myServer2.listen(8004 , ()=>{
    console.log("Server Started !!");
});
