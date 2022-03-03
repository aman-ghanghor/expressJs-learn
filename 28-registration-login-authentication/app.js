import express from "express" ;
import web from "./routes/web.js"
import connectDB from "./db/connectdb.js";
import session from "express-session" ;
const app = express() ;
const port = process.env.PORT || 8000 ;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017" ;


// database connection
connectDB(DATABASE_URL);

// Session 
app.use(session({
    name: "login-session",
    secret: "loginSession",
    resave: false ,
    saveUninitialized: true
}))

// Setup View engine
app.set("view engine", "ejs");
app.set("views", "./views");

// urlencoded middleware
app.use(express.urlencoded({extended: false})) ;

// Static files
app.use("/static", express.static("public"));

// Load routes
app.use("/student", web);


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})