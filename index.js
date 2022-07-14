const express = require("express");
const app = express();
const port = 9000;
 
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

app.listen(port,()=>{
    console.log(`Sistemas Running on port ${port} ...`)
})