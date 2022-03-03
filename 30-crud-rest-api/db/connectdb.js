import mongoose from "mongoose" ;

const connectDB = async (DATABASE_URL) => {
    try{
       const DB_OPTIONS = {
          dbName: process.env.DB_NAME
       }
       const result = await mongoose.connect(DATABASE_URL, DB_OPTIONS)
       console.log("Connected Successfully...")
    }
    catch(err) {
       console.log(err)
    }
}


export default connectDB ;