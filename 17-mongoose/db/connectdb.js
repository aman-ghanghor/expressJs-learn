import mongoose from "mongoose" ;

/* ------ using promise-then -----------------------------------------
const connectDB = (DATABASE_URL) => {
    return mongoose.connect(DATABASE_URL).then(()=>{
        console.log("Connected Successfully...");
    }).catch((err)=>{
        console.log(err) ;
    })
}
*/

// ------ using async await ------------------------------------------
const connectDB = async (DATABASE_URL) => {
    try{
       await mongoose.connect(DATABASE_URL)
       console.log("Connected Successfully");
    }
    catch(err) {
       console.log(err);
    }
}

export default connectDB;
