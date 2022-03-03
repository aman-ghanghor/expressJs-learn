import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const OPTIONS = {
        dbName: "demo"
    }
    const result = await mongoose.connect(DATABASE_URL, OPTIONS) ;
    console.log("Connected Successfully...") ;
  } catch (err) {
    console.log(err)
  }
};

export default connectDB ;