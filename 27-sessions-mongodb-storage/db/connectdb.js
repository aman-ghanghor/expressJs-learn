import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "school",
    };
    const result = await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connect Successfully...") ;
  } catch (err) {
    console.log(err);
  }
};


export default connectDB ;