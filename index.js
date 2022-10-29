const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.get("/", (req, res)=>{
  res.send("HELLO WORLD")
})

app.get("/signup", (req, res) =>{
  res.sendFile(__dirname + '/index.html')
})



app.listen(5000, ()=>{
  console.log("Server running on port 5000!");
})