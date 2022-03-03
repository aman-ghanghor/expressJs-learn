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
      publish: { type: Date, default: Date.now() },
    },
  ],
  join: { type: Date, default: Date.now },
});

// Compiling Schema
const studentModel = mongoose.model("student", studentSchema);

// Creating Document
const createDoc = async () => {
  try {
    // inserting document
    const studentDoc = new studentModel({
      name: "Ajeet",
      age: 19,
      fees: 5000,
      hobbies: ["Sleeping", "Cricket"],
      isactive: true,
      comments: [
        {
          value: "Bekhyali me hi tera hi khuwaw aaye",
        },
      ],
    });
    await studentDoc.save();
    console.log("Document Inserted Successfully");
  } catch (err) {
    console.log(err);
  }
};

// createDoc();


// Update Document by Id
const updateDocById = async () => {
  try{
    const result = await studentModel.findByIdAndUpdate("61ff577df3feddec21a50f08", {name: "Jasmin"}) ;
    // const result = await studentModel.findByIdAndUpdate("61ff577df3feddec21a50f08", {name: "Sameer"}, {returnDocument: "after"}) ;
    console.log(result);
  }
  catch(err) {
    console.log(err)
  }
}

// Update One document
const updateOneDoc = async () => {
  try{
    const result = await studentModel.updateOne({_id: "61ff577df3feddec21a50f08"}, {name: "Katrina"}) ;
    // const result = await studentModel.updateOne({_id: "35ff577df3feddec21a50f08"}, {name: "Yash"},{upsert: true} ) ;
    console.log(result) ;
  }
  catch(err) {
    console.log(err)
  }
}

// Update Many document
const updateManyDoc = async () => {
  try{
    const result = await studentModel.updateMany({age: 30}, {name: "Kuldeep"}) ;
    // const result = await studentModel.updateMany({age: 30}, {name: "Kuldeep"}, {upsert: true}) ;
    console.log(result) ;
  }
  catch(err) {
    console.log(err) ;
  }
}



export {
  updateDocById,
  updateOneDoc,
  updateManyDoc
}