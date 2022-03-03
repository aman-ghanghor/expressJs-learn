import UserModel from "../model/Student.js";

class UserController {
  // Get All Data
  static showAllData = async (req, res) => {
    try {
      const result = await UserModel.find();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Single Data
  static showSingleDataById = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await UserModel.findById(id);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Create
  static createData = async (req, res) => {
    const { name, age, city } = req.body;
    try {
      const doc = new UserModel({
        name: name,
        age: age,
        city: city,
      });
      const result = await doc.save();
      res.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Update
  static updateDataById = async (req, res) => {
    try {
      const id = req.params.id ;
      const {name, age, city} = req.body
      const doc = {
        name: name,
        age: age,
        city: city,
      };
      const result = await UserModel.findByIdAndUpdate(id, doc);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete
  static deleteDataById = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await UserModel.findByIdAndDelete(id);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };


}

export default UserController;
