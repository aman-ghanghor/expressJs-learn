import mongoose from "mongoose";

// Creating schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18, max: 65 },
  fees: { type: mongoose.Decimal128, validate: (v) => v >= 550.5 },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comments: [
    {
      value: { type: String },
      publish: { type: Date },
    },
  ],
  join: { type: Date, default: Date.now },
});


// Compiling Schema
const studentModel = mongoose.model('student', studentSchema) ;

console.log(studentSchema.path("name")) ;