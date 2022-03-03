import express from "express" ;

const app = express() ;
const port = process.env.PORT || 8000


/*app.get("/student/delete/:id", (req, res)=>{
    console.log(req.params)
    res.send(`Student Deleted ${req.params.id}`) 
})*/

/*app.get("/product/:category/:id", (req, res)=>{
    const {category, id} = req.params ;
    res.send(`CATEGORY:${category},   ID:${id}`) ;
})*/

/*app.get("/product/order/:year/and/:month", (req, res)=>{
    const {year, month} = req.params ;
    res.send(`year:${year},   ID:${month}`) ;
})*/

/*app.get("/train/:from-:to", (req, res)=>{
    console.log(req.params)
    const {from, to} = req.params ;
    res.send(`Travelling from ${from} to ${to}`) ;
})*/

/*app.get("/location/:state.:city", (req, res)=>{
    const {state, city} = req.params ;
    res.send(`state=${state} , city=${city}`)
})*/


// ------ Route Parameter with RegX ------------------------------------------------------

/*app.get("/student/:id([0-9]{2})", (req, res)=>{
    const id = req.params.id ;
    res.send(`Student ID: ${id}`) ;
})*/

/*app.get("/product/order/:year/and/:month([a-z]{3,})", (req, res)=>{
    const {year, month} = req.params ;
    res.send(`order year: ${year} , month: ${month}`) ;
})*/

/*app.get("/:type(post|article)/:id", (req, res)=>{
    console.log(req.params) ;
    const {type, id} = req.params ;
    res.send("Post or Article") ;
})*/


// ------ app.param() --------------------------------------------------------------------

/*app.param("id", (req, res, next, id)=>{
    console.log(`Called only once. ID : ${id}`) ;
    next() ;
})
app.get("/user/:id", (req, res, next)=>{
    console.log("first time match") ;
    next()
})
app.get("/user/:id", (req, res)=>{
    console.log("second time match")
    res.send("Hello User") ;
})*/


// ------ app.param() = array of route parameter ----------------------------------------

/*app.param(['id', 'page'], (req, res, next, value)=>{
    console.log(`Called only once for each param : ${value}`) ;
    next() ;
})
app.get("/user/:id/:page", (req, res, next)=>{
    console.log("first time match") ;
    next()
})
app.get("/user/:id/:page", (req, res)=>{
    console.log("second time match")
    res.send("Hii Response OK") ;
})*/



// ------ Query String ------------------------------------------

/*app.get("/product", (req, res)=>{
    console.log(req.query);
    const category = req.query.category;
    if(category){
        res.send(`Response OK, category:${category}`);
    }
    else{
        res.send("Response OK")
    }
})*/

/*app.get("/product", (req, res)=>{
    console.log(req.query);
    const {category, id} = req.query ;
    if(category && id){
        res.send(`Response OK, category:${category}, id:${id}`);
    }
    else{
        res.send("Response OK")
    }
})*/




app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})