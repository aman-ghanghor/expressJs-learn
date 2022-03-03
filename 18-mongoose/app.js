import express from "express";
import web from "./routes/web.js"
import connectDB from "./db/connectdb.js";
const app = express() ;
const port = process.env.PORT || 8000

// with user authentication - in url
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://aman:123456@localhost:27017/schooldb?authSource=schooldb" ;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017" ;
// Database Connection
connectDB(DATABASE_URL) ;



// Setup ejs
app.set("view engine", "ejs") ;  
app.set("views", "./views") ;

// Static files
app.use("/static", express.static('public'));

// Load routes
app.use("/", web);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})