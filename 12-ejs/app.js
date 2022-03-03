import express from "express";
import {join} from "path";
const app = express() ;
const port = process.env.PORT || 8000;

import web from "./routes/web.js";
// load router
app.use("/", web)


// Set Template engine
app.set("view engine", "ejs")
app.set("views", "./views");





// Use Static Files
app.use("/static", express.static(join(process.cwd(), "public")))

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})