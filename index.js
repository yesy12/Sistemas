const bodyParser = require("body-parser");
const express = require("express");
const User = require("./models/User");
const app = express();
const port = 9000;
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")

require("./db");


const UserSchema = require("./models/User")

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

app.post("/user/registration",async(req,res)=>{
    const {lName,lLastName, lCpf, lDateBirthday, lTelephone} = req.body;

    errors = [];
    const regex_number = new RegExp("[0-9]")
    const regex_text = new RegExp("[A-z]")

    //Name
    if(!lName || typeof lName == undefined || lName == null || regex_number.test(lName)){
        errors.push({
            text : "Name Invalid"
        });
    }

    //LastName
    if(!lLastName || typeof lLastName == undefined || lLastName == null || regex_number.test(lLastName)){
        errors.push({
            text : "Last Name Invalid"
        });
    }

    //Cpf
    if(!lCpf || typeof lCpf == undefined || lCpf == null || regex_text.test(lCpf)){
        errors.push({
            text : "CPF Invalid"
        });
    }
    if(lCpf.length > 11 || lCpf.length < 11){
        errors.push({
            text : "CPF is wrong in the length"
        })
    }


    //lDateBirthday
    const date = lDateBirthday.split("-")
    console.log(date)
    if(!lDateBirthday || typeof lDateBirthday == undefined || lDateBirthday == null || regex_text.test(lDateBirthday)){
        errors.push({
            text : "Date Birthday Invalid"
        });
    }

    if(lDateBirthday.length > 10 || lDateBirthday.length < 10 || date[0] > new Date().getFullYear() || date[1] > (new Date().getMonth()+1) ||date[2] > (new Date().getDate()+1)){
        errors.push({
            text : "Date Birthday wrong"
        })
    }

    //lTelephone
    if(!lTelephone || typeof lTelephone == undefined || lTelephone == null || regex_text.test(lTelephone)){
        errors.push({
            text : "Telephone Invalid"
        });
    }


    if(errors.length > 0){
        res.send({errors})
    }
    else{
        res.send(req.body)
    }

    
    
})

app.listen(port,()=>{
    console.log(`Sistemas Running on port ${port} ...`)
})