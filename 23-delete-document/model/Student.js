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


// Delete document By Id
const deleteDocById = async () => {
  try{
    const result = await studentModel.findByIdAndDelete("35ff577df3feddec21a50f08") ;
    console.log(result) ;
  }
  catch(err) {
    console.log(err)
  }
}

// Delete One Document
const deleteOneDoc = async () => {
  try{
    const result = await studentModel.deleteOne({age: 30}) ;
    console.log(result)
  }
  catch(err) {
    console.log(err)
  }
}

// Delete Many Document
const deleteManyDoc = async () => {
  try{
    const result = await studentModel.deleteMany({isactive: false}) ;
    console.log(result)
  }
  catch(err) {
    console.log(err)
  }
}

export {
   deleteDocById,
   deleteOneDoc,
   deleteManyDoc
}