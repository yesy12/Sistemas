//USER CONTROLLER LOGIN

const {validationEmail, validationPassword} = require("../../../functions/validation_inputs")
const UserSchema = require("../../../models/User")

function index(req,res){
    res.render("user/login",{
        "title" : "Login"
    })
}

async function store(req,res){

    const {lEmail, lPassword} = req.body;
    errors = []

    if(!validationEmail(lEmail)){
        errors.push({
            "text" : "E-mail Invalid"
        })
    }

    if(!validationPassword(lPassword)){
        errors.push({
            "text" : "Password Invalid"
        })
    }

    if(errors.length){
        res.send(errors)
    }
    else{
        const result = await UserSchema.find({
            "email":lEmail,"password":lPassword},{"email":1,"password":1},{"limit":1})

        if(result.length > 0){
            res.redirect("user/")
        }
        else{
            res.redirect("user/login",{
                errors
            })
        }
    }

}


module.exports = {
   index, store
}