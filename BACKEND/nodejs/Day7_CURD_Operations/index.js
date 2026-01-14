const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

// Routes

app.get("/users",(req,res)=>{
    const html = `
    <ul> 
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html)
});

// REST API - JSON

app.get("/api/users",(req,res)=>{
    return res.json(users)
})

app.post("/api/users",(req,res)=>{
    //To do create new user

    return res.json({status :"pending"});
})

app.route("/api/users/:id")  //If have same rout has many request then do that 
.get((req,res)=>{
    const id = Number(req.params.id);  // id is by default a string
    const user = users.find((user)=> user.id === id);
    return res.json(user)
})
.put((req,res)=>{
    //To Do: Edit the user with id
    return res.json({status :"pending"});
})

.patch((req,res)=>{
    //To Do: Edit the user with id
    return res.json({status :"pending"});
})

.delete((req,res)=>{
    //To Do: Delete the user with id
    return res.json({status :"pending"});
})





app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))