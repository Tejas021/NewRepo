const express = require("express")

const app = express()

app.get("/",async(req,res)=>{
    res.send({Text:"HEllo"})


})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("called")
})