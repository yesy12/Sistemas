const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9000;
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine","ejs")

require("./functions/db");

//Routes
const routes = require("./routes/indexRoutes");
app.use("",routes)


app.listen(port,()=>{
    console.log(`Sistemas Running on port ${port} ...`)
})