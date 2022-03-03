import express from "express" ;

const app = express() ;

app.get('/', (req, res)=>{
   res.send("Hello baby") ;
})

const port = 8000 ;

app.listen(port, ()=>{
   console.log("Hello world") ;
})