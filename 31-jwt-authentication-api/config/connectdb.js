import mongoose from "mongoose";


const connectDB = async (DATABASE_URL) => {
    const OPTIONS = {
       dbName: "jwtdb",
    }
    try {
       const result = await mongoose.connect(DATABASE_URL, OPTIONS)
       console.log('Connected Successfully...')
    }
    catch(e) {
       console.log(e)
    }
}

export default connectDB ;