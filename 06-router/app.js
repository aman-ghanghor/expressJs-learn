import express from "express" ;

// importing router module
import stu from "./routes/student.js" ;
import teacher from "./routes/teacher.js" ;

const app = express() ;
const port = process.env.PORT || 8000;

// Load student Router Module
app.use("/student", stu) 
// Load teacher Router Module
app.use("/teacher", teacher)


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})