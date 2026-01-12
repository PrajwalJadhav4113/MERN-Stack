const express = require('express') // here import express
const blog =require('./routes/blog')  // here we want to write our routes path
const app = express()  // defined app
const port = 3000   // port

app.use(express.static('public'))
app.use('/blog',blog)

app.get('/', (req, res) => {
  res.send('Hey its my get request!')
})

app.get('/about', (req, res) => {
  res.send('Hey This is about')
})

app.post('/', (req, res) => {
  console.log('Hey its my post request')
  res.send('Hello World Post!')
})

// app.get('/blog', (req, res) => {
//   res.send('This main blog')
// })

// app.get('/blog/age', (req, res) => {
//   res.send('My age is 22')
// })

// app.get('/blog/:slug/:second', (req, res) => {
//   res.send(`Hello ${req.params.slug} and ${req.params.second}`)
//   console.log(req.params)  //{ slug: 'hoho-to-js', second: 'go your home' }
//   console.log(req.query)   //{ 'Jay ho': '', 'Vijay aso': '' }
  
// })

app.put('/index', (req, res) => {
    console.log("Hey its put request")
  res.send('Hey its my put request!')
})

app.get('/index', (req, res) => {
    console.log("Hey its index")
  res.sendFile('templets/index.html',{root:__dirname}) //only we assign path it not run but when write and show this dir so they find the directory
})

app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, d:4})
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
