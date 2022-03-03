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

// Retrieve All Documents
const getAllDoc = async () => {
  const result = await studentModel.find();
  result.forEach((item) => {
    console.log(item.name);
    console.log(item.age);
    console.log(item.hobbies[0]);
    console.log(item.hobbies[1]);
    console.log(item.isactive);
    console.log(item.comments[0].value);
    console.log("");
  });
};

// Retrieve All Document with Specific Files/Paths
const getAllDocSpecificField = async () => {
  // const result = await studentModel.find({}, 'name age') ;         // include
  // const result = await studentModel.find(['name', 'age']);         // include
  // const result = await studentModel.find({}, {name: 1, age: 1}) ;  // include

  // const result = await studentModel.find({}, '-name -age') ;       // exclude
  // const result = await studentModel.find({}, ['-name', '-age']);   // exclude
  // const result = await studentModel.find({}, {name: 0, age: 0}) ;  // exclude

  // const result = await studentModel.find().select("name age");          // include
  // const result = await studentModel.find().select(['name', 'age']);     // include
  // const result = await studentModel.find().select({name: 1, age: 1});   // include

  // const result = await studentModel.find().select("-name -age");        // exclude
  // const result = await studentModel.find().select(['-name', '-age'])    // exclude
  // const result = await studentModel.find().select({name: 0, age: 0});   // exclude

  result.forEach((doc) => {
    console.log(result);
  });
};

// Retrieve Single Document
const getSingleDoc = async () => {
  const result = await studentModel.findById("61ff58113e9077d11a5e5bbb");
  console.log(result);
  // console.log(result._id.getTimestamp(), result.name, result.age, result.fees.toString())
};

// Retrieve Single Document with Specific Fields
const getSingleDocSpecificField = async () => {
  const result = await studentModel.findById("61ff58113e9077d11a5e5bbb", 'name age hobbies') ;
  console.log(result)
};


// Retrive Documents By Fields
const getDocByField = async () => {
  const result = await studentModel.find({name: "Sonam"}) ;
  console.log(result);
}

// Retrive Documents By Fields with Specific Field
const getDocByFieldSpecificField= async () => {
  // const result = await studentModel.find({name: "Sonam"}, {name: 1, age: 1}) ;
  const result = await studentModel.find({name: "Sonam"}).select('name age') ;
  console.log(result);
}

// Retrieve Limited Document
const getLimitedDoc = async () => {
  const result = await studentModel.find().limit(3) ;
  // const result = await studentModel.find({}, null, {limit: 3}) ;
  console.log(result) ;
}

// Retrieve Skip Document
const getSkipDoc = async () => {
  const result = await studentModel.find().skip(1) ;
  // const result = await studentModel.find({}, null, {skip: 1}) ;
  console.log(result) ;
}

// Count Document
const getDocCount = async () => {
  const count = await studentModel.find().countDocuments() ;
  console.log(count) ;
}

// Sort Document
const getSortedDoc = async () => {
  // const result = await studentModel.find().sort({age: 1}) ;    // ascending order
  // const result = await studentModel.find().sort({age:-1})      // descending order
  const result = await studentModel.find().limit(4).sort({age: 1}) ;   
  console.log(result) ;
}

// Mix 
const mixDoc = async () => {
  const result = await studentModel.find({}, {name: 1, age: 1}, {limit: 3, skip: 1}) ;
  console.log(result);
}

// Comparison Query Operator
const compDoc = async () => {
  // const result = await studentModel.find({age: {$gt: 25}}) ;
  // const result = await studentModel.find({age: {$gte: 25}}).sort({age: 1}) ;
  // const result = await studentModel.find({age: {$lt: 25}}) ;
  // const result = await studentModel.find({age: {$lte: 25}}) ;
  // const result = await studentModel.find({age: {$ne: 30}}) ;
  // const result = await studentModel.find({age: {$in: [23, 25, 33] }})
  const result = await studentModel.find({age: {$nin: [23, 25]}}) ;
  console.log(result) ;
}

// Logical Query Operator
const logDoc = async () => {
  // const result = await studentModel.find({$and: [{isactive: true}, {age: 30}] }) ;
  // const result = await studentModel.find({$or: [{name: "Sonam"}, {age: 30}] }) ;
  // const result = await studentModel.find({$and: [ {age: {$gt:25}}, {isactive: true} ] })
  // const result = await studentModel.find({$or: [ {age: {$gte:30}}, {isactive: false} ] })
  // const result = await studentModel.find({age: {$not: {$gt: 25}} })
  const result = await studentModel.find({$nor: [{age: 33}, {isactive: false}]})
  console.log(result) ;
}


export {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocByFieldSpecificField,
  getLimitedDoc,
  getSkipDoc,
  getDocCount,
  getSortedDoc,
  mixDoc,
  compDoc,
  logDoc
};
