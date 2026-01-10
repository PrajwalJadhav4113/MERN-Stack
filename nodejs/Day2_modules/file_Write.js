const fs = require("fs")

// Sync 
fs.writeFileSync("./text.txt","Hello Prajwal Sync");

//Async
fs.writeFile("./text.txt", "Helloo Prajwal from Async", (err)=>{});

//-------------------------------------------------------------------------

                     