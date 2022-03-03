import express from "express";
import path from "path";
import web from "./routes/web.js";
const app = express() ;
const port = process.env.PORT || 8000;


// Setup template engine
app.set("view engine", "ejs");
app.set("views", "./views"); 

// Static Files
app.use("/static", express.static(path.join(process.cwd(), 'public'))) ;

// Load routes
app.use("/", web);



app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})
