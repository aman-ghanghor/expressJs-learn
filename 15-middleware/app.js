import express from "express";
import web from "./routes/web.js";
import student from "./routes/student.js";

import myLogger from "./middlewares/logger-middleware.js";
import { studentController } from "./controllers/studentController.js";
const app = express();
const port = process.env.PORT || 8000;



// Application Level Middleware
// app.use(myLogger) ;                              
// app.use("/about", myLogger)                             // hit when path is from /about ex- /about/23, /about/company





// Setup ejs
app.set("view engine", "ejs") ;
app.set("views", "./views") ;

// Static files
app.use(express.static("public")) ;           // you can give absolute path of public 

// load router
app.use("/", web);
app.use("/student", student);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})