const express = require("express")
const app = express()
const port=5000
app.get("/",(req,res) => {
    res.status(200).send("Welcome")

})

app.get("/register",(req,res) => {
    res.send("register page")
})

app.listen(port,()=> {
    console.log("serving is running on port "+port)
})
