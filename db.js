require("dotenv").config()
const mongoose = require("mongoose");

const uri = process.env.uriMongoDb

const db = mongoose.connect(uri,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    },
    (error, connection)=>{
        if(error){
            console.log(error)
            return 
        }
        else if(connection){
            console.log("Connection on Database")
        }
})