// const express = require('express') ;
import express from "express" ;
const app = express() ;
const port = process.env.PORT || '8000' ;

// Routes
app.get('/', (req, res)=>{
    res.send("Get Method")
})

/*
app.all('/api/*', (req, res)=>{
    res.send("Api page") ;
})
*/

/*
app.all('*', (req, res)=>{
    res.send("Page not found !!!")
})
*/

// String Path --------------------------------------------
/*
app.get("/about", (req, res)=>{
    res.send("About Page") ;
})
*/

// String Pattern -----------------------------------------
/*
app.get("/ab?cd", (req, res)=>{
    res.send("This route path will match (acd) and (abcd)") ;
})
*/

// Regular Expression Path -------------------------------------
/*
app.get(/(student)\/[0-9]+/ , (req, res)=>{        // ex: /student/233
    res.send("This is student/(id)") ;
})
*/

// More than One Callback --------------------------------------------
/*
app.get("/many", (req, res, next)=>{
    console.log("First callback")
    next()     // execute next callback
}, (req, res)=>{
    res.send("More than one callback example")
})
*/

// An Array of Callback --------------------------------------------------
/*
const cb1 = (req, res, next)=> {
    console.log("First Callback") ;
    next()
}
const cb2 = (req, res, next)=> {
    console.log("Second Callback") ;
    next()
}
const cb3 = (req, res)=> {
    console.log("Third Callback") ;
    res.send("Array of Callback Example")
}
app.get("/cbarray", [cb1, cb2, cb3] )
*/

// Combination of Independent Callback and Array Callbacks ------------------------
/*
const cb1 = (req, res, next)=> {
    console.log("First Callback") ;
    next()
}
const cb2 = (req, res, next)=> {
    console.log("Second Callback") ;
    next()
}
app.get("/combo", [cb1, cb2], (req, res, next)=>{
    console.log("Third Callback")
    next()
}, (req, res)=>{
    res.send("Combination of array of callbacks and independent callbacks.")
})
*/


// Without Chained Route Callbacks ---------------------------------------
/*
app.get("/student", (req, res)=>{
    res.send("All Student")
})
app.post("/student", (req, res)=>{
    res.send("Add New Student")
})
app.put("/student", (req, res)=>{
    res.send("All New Student")
})
*/

// Chained Route Callbacks -------------------------------------------------
/*
app.route("/student")
.get((req, res)=>{
    console.log("GET Method")
    res.send("All Student") 
})
.post((req, res)=>{
    console.log("POST Method")
    res.send("Add New Student") 
})
.put((req, res)=>{
    console.log("PUT Method")
    res.send("Add New Student")
})  
.all((req, res, next)=>{
    console.log("First Run this for All HTTP Method")
    next()
})
.get((req, res)=>{
    console.log("GET Method")
    res.send("All Student") 
})
.post((req, res)=>{
    console.log("POST Method")
    res.send("Add New Student") 
})
.put((req, res)=>{
    console.log("PUT Method")
    res.send("Add New Student")
})
*/


app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
})