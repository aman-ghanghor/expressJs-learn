import express from "express" ;
import web from "./routes/web.js"

const app = express() ;
const port = process.env.PORT || 8000 ;

// load route
app.use("/", web);


app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})