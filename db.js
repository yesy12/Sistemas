require("dotenv").config()
const {MongoClient} = require("mongodb");

const username = process.env.username_mongoDb;
const password = process.env.password_mongoDb;
const dbName = process.env.dbName_mongoDb;

const uri = `mongodb+srv://${username}:${password}@cluster0.nth3w.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

client.connect((error,connection)=>{
    if(error){
        return console.log(error)
    }
    else if(connection){
        console.log("Connected on Database")
        global.connection = connection.db(dbName)
    }
})
