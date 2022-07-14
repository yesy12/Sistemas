require("dotenv").config()
const mongoose = require("mongoose");

const username = process.env.username_mongoDb;
const password = process.env.password_mongoDb;
const dbName = process.env.dbName_mongoDb;

const uri = `mongodb+srv://${username}:${password}@cluster0.nth3w.mongodb.net/?retryWrites=true&w=majority`

const mongoonse = mongoose.connect(`${uri}/${dbName}`,()=>{
    console.log("Connection on Database")
})
