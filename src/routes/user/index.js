// INDEX USERS
const router = require("express").Router();

const userLogin = require("./Login")
const userRegistration = require("./Registation")

router.use("/login",userLogin)
router.use("/registration",userRegistration)

router.get("/",(req,res)=>{
    res.render("user",{
         "title" : "Usuario"
    });
})


module.exports = router;