import mongoose from "mongoose";

// creating schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 5, max: 19 },
  city: { type: String },
});

// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

// creating document
const createDoc = async () => {
  try {
    const studentDoc = new studentModel({
      name: "Meera",
      age: 10,
      city: "Mumbai",
    });
    const result = await studentDoc.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// creating document
/*
const createDoc = async (nm, ag, city) => {
  try {
    const studentDoc = new studentModel({
      name: nm,
      age: ag,
      city: city,
    });
    const result = await studentDoc.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
*/

// Inserting multiple documents 
/*
const createMultiDoc = async () => {
  try {
    const doc1 = new studentModel({
      name: "Suresh",
      age: 9,
      city: "Ranchi",
    });
    const doc2 = new studentModel({
      name: "Radha",
      age: 11,
      city: "Delhi"
    })
    const doc3 = new studentModel({
      name: "Krishna",
      age: 14,
      city: "Bhopal"
    })
    const result = studentModel.insertMany([doc1, doc2, doc3]) ;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
*/

export default createDoc ;
