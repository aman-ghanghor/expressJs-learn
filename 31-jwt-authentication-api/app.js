import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config() ;

const app = express() ;
const PORT = process.env.PORT || 8000

import userRoutes from "./routes/userRoutes.js";

import connectDB from "./config/connectdb.js"

app.get('/', (req, res)=>{
    console.log("Hello World")
    res.send("This is Home Page")
})

// CORS Policy
app.use(cors())


// Parse Request body into json
app.use(express.json())

// Connect DB
const DATABASE_URL = process.env.DATABASE_URL ;
connectDB(DATABASE_URL)


// Load Routes
app.use('/api/user', userRoutes)


app.listen(PORT, ()=>{
    console.log("Server running on port 8000")
})
































