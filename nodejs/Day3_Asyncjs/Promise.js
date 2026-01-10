const { resolve } = require("node:dns");

const PromiseOne= new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Hey promise is done 1 ");
    resolve()
    reject()
},1000)
})

PromiseOne.then(()=>{
    console.log("Promise consumed 1");
})
PromiseOne.catch(()=>{
    console.log("Promise rejected");
})

//-----------------------------Short------------

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async promise 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Consumed 2")
})

//--------------------------3----------------------------

const PromiseThree= new Promise((resolve,reject)=>{
setTimeout(()=>{
   console.log("Promise three 3")
    resolve({username:"Prajwal",email:"prajwal@555.com"})

},1000)
})

PromiseThree.then((user)=>{
    console.log("User Data 3",user);
})

//---------------------4--------------------------------

const PromiseFour= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:"Prajwal",password:"123456"})
        }
        else{
            reject('EROOR:Something went wrong')
        }
    },1000)
})

PromiseFour.then((user)=>{
console.log(user);
return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
console.log(error)
})
.finally(()=>{
    console.log("The promice will either resolve and reject")
})

//----------------------------5---------------------------

const PromiseFive= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({name:"SOham",age:"12"})
        }
        else{
            reject('EROOR:Something went wrong')
        }
    },1000)
})

async function ConsumePromiseFive() {
    try{
        const response = await PromiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

ConsumePromiseFive()

//---------------------------6 Fetching --------------------------------

async function getAllUsers() {
    try{
        const response =await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("E:",error);
    }
}

getAllUsers()
// --------------------7 using then----------------------

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("WE are fetch data from url")
})
