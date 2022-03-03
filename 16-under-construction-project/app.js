import express from "express";
import router from "./routes/web.js"
const app = express() ;
const port = process.env.PORT || 8000;

import {underConstruction} from "./middlewares/construction-middleware.js";

// Application-level Middleware
app.use("/", underConstruction)


// Setup template engine
app.set("view engine", "ejs");
app.set("views", "./views") ;

// Static files
app.use('/static', express.static('public'));

// Load routes
app.use("/", router);


app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})