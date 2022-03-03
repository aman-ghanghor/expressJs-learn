import express from "express" ;
import web from "./routes/web.js"
const app = express() ;
const port = process.env.PORT || 8000 ;

import cookieParser from "cookie-parser" ;

// Cookie Parser Middleware
app.use(cookieParser()) ;


// Static file
app.use("/static", express.static("public"))

// Load routes
app.use("/", web) ;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})