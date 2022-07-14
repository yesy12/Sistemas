const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9000;
 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")


//Routes
app.get("/user",(req,res)=>{
    res.render("user/",{
        "title" : "Usuario"
    });
})

app.get("/user/login",(req,res)=>{
    res.render("user/login",{
        "title" : "Login"
    })
})

app.get("/user/registration",(req,res)=>{
    res.render("user/registration",{
        "title" : "Cadastro"
    })
})

app.post("/user/registration",(req,res)=>{
    res.send(req.body)
})

app.listen(port,()=>{
    console.log(`Sistemas Running on port ${port} ...`)
})