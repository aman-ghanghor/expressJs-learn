import StudentModel from "../model/Student.js";

class homeController {
  // get all documents
  static getAllDoc = async (req, res) => {
    try {
      const result = await StudentModel.find().sort({name: 1}) ;
      res.render("index", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  // create new document
  static createDoc = async (req, res) => {
    try {
      const { name, age, fees } = req.body;
      const studentDoc = new StudentModel({
        name: name, 
        age: age, 
        fees:fees
      }) ;
      await studentDoc.save() ;
      console.log("Document Created Successfully") ;
      res.redirect("/student");
    } catch (err) {
      console.log(err);
      res.send("Please Enter valid value")
    }
  };
  // edit document
  static editDoc = async (req, res) => {
     const id = req.params.id ;
     try {
        const doc = await StudentModel.findById(id) ;
        res.render("edit", {data: doc}) ;
     } 
     catch(err) {
       console.log(err)
     }
  };
  // update document
  static updateDoc = async (req, res) => {
    try{
      const id = req.params.id ;
      const {name, age, fees} = req.body ;
      const result = await StudentModel.findByIdAndUpdate(id, {name, age, fees}) ;
      console.log(result) ;
      res.redirect("/student") ;
    }
    catch(err) {
      console.log(err) ;
    }
  }

  // delete doument
  static deleteDoc = async (req, res) => {
    try{
      const id = req.params.id ;
      const result = await StudentModel.findByIdAndDelete(id) ;
      console.log(result) ;
      res.redirect("/student") ;
    }
    catch(err) {
      console.log(err);
    }
  };
}

export default homeController;
