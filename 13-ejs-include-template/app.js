import express from "express" ;
import web from "./routes/web.js"
import path from "path";
const app = express() ;
const port = process.env.PORT || 8000;



// Setup template engine - ejs
app.set("view engine", "ejs");
app.set("views", "/views");       


// Static files
app.use("/static", express.static(path.join(process.cwd(), 'public')));

// load routes
app.use("/", web);


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})

