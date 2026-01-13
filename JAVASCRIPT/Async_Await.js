const { response } = require("express");

async function task() {
    await new Promise((resolve)=>{
        console.log("TAsk 1")                         /// Its Long cut
        resolve()
    },3000)

    await new Promise(r => setTimeout(r, 5000));    //  Its shortcut
    console.log("Task 2 done");

    await new Promise(r => setTimeout(r, 1000));
    console.log("Task 3 done");
}

task();



// You created two different async functions
// They do not know about each other
// await works only inside its own function
// Both functions run asynchronously


async function slowTask() {
    await new Promise(r => setTimeout(r, 2000));
    console.log("Slow task done");
}

async function fastTask() {
    await new Promise(r => setTimeout(r, 1000));
    console.log("Fast task done");
}

fastTask();
slowTask();


//https://jsonplaceholder.typicode.com/users

//using .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
}) .then((data)=>{
     console.log(data)
}).catch((err)=>{
console.log(err)
})

//  Using Async Await  try & Catch

async function getData() {
try{

    const data= await fetch("https://jsonplaceholder.typicode.com/users")
    const result= await data.json()
    console.log(result)
}
catch{
    console.log("error")
}
}
getData()
