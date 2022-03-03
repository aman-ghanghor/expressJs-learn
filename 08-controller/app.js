import express from "express";
// importing student route
import stud from "./routes/student.js";

const app = express() ;
const port = process.env.PORT || 8000;

// load the student route
app.use("/student", stud)


app.listen(port, ()=>{
    console.log(`server running on port ${port}`) ;
})