const express = require("express");
const app = express();
const port = 9000;

app.get("/user",(req,res)=>{
    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Sistemas Running on port ${port} ...`)
})