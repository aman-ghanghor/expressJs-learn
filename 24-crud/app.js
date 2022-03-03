import express from "express" ;
import web from "./routes/web.js"
const app = express() ;
const port = process.env.PORT || 8000 ;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017" ;

import connectDB from "./db/connectdb.js"; 

// Database Connection
connectDB(DATABASE_URL) ;
// createDoc() ;


// urlencoded middleware
app.use(express.urlencoded({extended: false})) ;

// Setup template engine
app.set('view engine', 'ejs') ;
app.set('views', './views') ;

// Static Files
app.use('/static', express.static('public')) ;

// Load routes
app.use("/student", web) ;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`) ;
})