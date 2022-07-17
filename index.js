const bodyParser = require("body-parser");
const express = require("express");
const User = require("./models/User");
const app = express();
const port = 9000;
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")

require("./db");
const {validationText, validationNumber,validationLength, validationDate} = require("./validation_inputs")

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

    //Name
    
    if(!validationText(lName)){
        errors.push({
            "text": "Name Invalid"
        })
    }
    if(!validationText(lLastName)){
        errors.push({
            "text": "Last Name Invalid"
        })
    }
    
    if(!validationNumber(lCpf) || !validationLength(lCpf,11,11)){
        errors.push({
            "text": "CPF Invalid"
        })
    }


    if(!validationNumber(lDateBirthday) || !validationLength(lDateBirthday,10,10) || !validationDate(lDateBirthday)){
        errors.push({
            "text": "Date Birthday Invalid"
        })
    }
        

    if(!validationNumber(lTelephone)){
        errors.push({
            "text": "Telephone Invalid"
        })
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