// importing express module
// const express = require('express') ;
import express from "express" ; // ES6 syntax

// initializing express
const app = express() ;
const port = process.env.PORT || '8000' ;

// responding
app.get("/", function(req, res){
    res.send("Hello world !!!")
})

// server listening
app.listen(port, ()=> {
    console.log(`server running on port ${port}`)
})



