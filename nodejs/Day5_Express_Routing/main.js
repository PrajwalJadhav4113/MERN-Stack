const express = require('express') // here import express
const app = express()  // defined app
const port = 3000   // port

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('My name is Prajwal')
})

app.get('/content', (req, res) => {
  res.send('Here is content')
})

app.get('/blog', (req, res) => {
  res.send('Hello This is blog!')
})


// http://localhost:3000/blog/hoho-to-js/go%20your%20home?Jay+ho&Vijay+aso
app.get('/blog/:slug/:second', (req, res) => {
  res.send(`Hello ${req.params.slug} and ${req.params.second}`)
  console.log(req.params)  //{ slug: 'hoho-to-js', second: 'go your home' }
  console.log(req.query)   //{ 'Jay ho': '', 'Vijay aso': '' }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
