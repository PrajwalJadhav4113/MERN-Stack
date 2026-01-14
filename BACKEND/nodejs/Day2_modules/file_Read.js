const fs= require("fs");


// Sync 
 const result = fs.readFileSync("./contact.txt" , "utf-8");
  console.log(result);


  //Async
fs.readFile("./contact.txt", "utf-8",(err,result)=>{
    if (err){

        console.log("Error",err);
    }
    else{
        console.log(result);
    }
});

//--------------------------------Append -------------

fs.appendFileSync("./test.txt",`${Date.now()} Hey There \n`)

fs.appendFile("./test2.txt",`${Date.now()} Hey There \n`)


//------------------------------ Copy---------------------

fs.cpSync("./test.txt","./copy.txt");

//------------------------Delete------------
//fs.unlinkSync("./copy.txt");

//------------------Stat means all info------------------

console.log(fs.statSync("./test.txt"))

//------------------------new directory-------------

fs.mkdirSync("my-docs/a/b",{recursive:true})