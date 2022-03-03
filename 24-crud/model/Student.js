import mongoose from "mongoose";

// Creating Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: {
    type: mongoose.Decimal128,
    validate: (value) => {
      return value >= 5000.5;
    },
    required: true,
  },
});

// Compiling Schema
const StudentModel = mongoose.model("student", studentSchema);


export default StudentModel ;
