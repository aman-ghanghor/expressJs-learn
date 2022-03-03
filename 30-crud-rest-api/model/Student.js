import mongoose from "mongoose"

// Create Schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    age: {type: Number, required: true, validate: (a)=>{ a > 18}},
    city: {type: String, required: true, trim: true}
})

// Compiling Schema
const UserModel = mongoose.model("user", userSchema) ;


export default UserModel ;