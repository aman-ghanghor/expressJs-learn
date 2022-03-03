import express from "express";
import web from "./routes/web.js";
// connectDB
import connectDB from "./db/connectdb.js";
// student model
import createDoc from "./models/Student.js";
const app = express() ;
const port = process.env.PORT || 8000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017" ;

// db connection
connectDB(DATABASE_URL) ;
// creating document
createDoc() ;
// createDoc("Gopi", 13, "Kanpur");
// createMultiDoc()


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