const express = require('express') // here import express
const app = express()  // defined app
const port = 3000   // port
const path = require("path");
const fs=require ("fs");
const date = new Date().toISOString();
const blog = require('../routes/blog')
//app.use(express.static(path.join(__dirname, "..", "public")));

// app.use(express.static('../public'))

app.use('/blog',blog)

// Middleware 1
app.use((req,res,next)=>{
    console.log('m1')
 
 fs.appendFileSync("middleware.txt", `${date} is a ${req.method} \n`)  
 req.prajwal= "Great Guy "
 //  res.send("Haked by middleware")  // Avoid it
  console.log(`${Date.now()} is a ${req.method}`)
    next()
})
//          |      control goes to
//         V

// Middleware 2
app.use((req,res,next)=>{
    console.log('m2')
    next()
})
//          |      control goes to
//          V

app.get('/', (req, res) => {
  res.send(`Hello World! ${req.prajwal}`)
})

app.get('/about', (req, res) => {
  res.send('My name is Prajwal'  +" "+ req.prajwal )
})

app.get('/content', (req, res) => {
  res.send('Here is content')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})