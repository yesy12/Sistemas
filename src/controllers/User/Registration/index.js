//USER CONTROLLER Registration

// Functions
const {validationText, validationNumber,validationLength, 
    validationDate, validationEmail, validationPassword} = require("../../../functions/validation_inputs")

// models
const UserSchema = require("../../../models/User");

function index(req,res){
    res.render("user/registration",{
        "title" : "Cadastro"
    })
}

async function store(req,res){
    const {lName,lLastName, lCpf, lDateBirthday, lTelephone, lEmail, lPassword, lRepeatPassword} = req.body
    errors = [];

    // Name and Last Name
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

    // Cpf
    if(!validationNumber(lCpf) || !validationLength(lCpf,11,11)){
        errors.push({
            "text": "CPF Invalid"
        })
    }

    // Date Birthday
    if(!validationNumber(lDateBirthday) || !validationLength(lDateBirthday,10,10) || !validationDate(lDateBirthday)){
        errors.push({
            "text": "Date Birthday Invalid"
        })
    }

    // Telephone
    if(!validationNumber(lTelephone)){
        errors.push({
            "text": "Telephone Invalid"
        })
    }

    // Email
    if(!validationEmail(lEmail)){
        errors.push({
            "text": "Email Invalid"
        })
    }

    // Password and Repeat Password
    if(!validationPassword(lPassword)){
        errors.push({
            "text" : "Password Invalid"
        })
    }

    if(!validationPassword(lRepeatPassword)){
        errors.push({
            "text" : "Repeat Password Invalid"
        })
    }

    if(lPassword != lRepeatPassword){
        errors.push({
            "text" : "Password e Repeat Password Invalid"
        })
    }

    // Age
    const lAge = validationDate(lDateBirthday,true)

    if(errors.length > 0){
        res.send({errors})
    }
    else{          
        const result = await UserSchema.find({
            "cpf": lCpf, "email": lEmail}, {"cpf": 1, "email":1})

        if(result.length == 0){
            await UserSchema.create({
                "name" : lName,
                "lastName" : lLastName,
                "cpf": lCpf,
                "age" : lAge,
                "dateBirthday": lDateBirthday,
                "email" : lEmail,
                "password" : lPassword
            })
            .then(()=>{
                res.redirect("/user/login")
            })
        }else{
            res.send({
                "text": "User is exists"
            })
        }
    } 
}

module.exports = {
    index, store
}   