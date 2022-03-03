import express from "express";
import {join} from "path";
const app = express();
const port = process.env.PORT || 8000 ;

import router from "./routes/web.js" ;
app.use("/", router) ;


// Setup the Template engine to use
app.set("view engine", "ejs") ;
// Setup the directory where template files (views files) are located
app.set('views', './views')


// static files
app.use("/static", express.static(join(process.cwd(), "public"))) ;


app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`) ;
})