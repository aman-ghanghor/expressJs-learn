import path from "path";
import UserModel from "../model/User.js";
import bcrypt from "bcrypt";

class UserController {
  static home = (req, res) => {
    res.render("index");
  };

  static registration = (req, res) => {
    if (req.session.isLogin) {
      res.redirect("302", "dashboard");
    } else {
      res.render("registration", { message: "" });
    }
  };

  static login = (req, res) => {
    if (req.session.isLogin) {
      res.redirect("302", "dashboard");
    } else {
      res.render("login", { message: "" });
    }
  };

  static dashboard = (req, res) => {
    if (req.session.isLogin) {
      res.render("dashboard");
    } else {
      res.redirect("302", "login");
    }
  };

  // Register User
  static createUser = async (req, res) => {
    const data = {
      message: "",
    };
    try {
      const { name, email, password } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const count = await UserModel.find({ email: email }).countDocuments();
      if (count === 0) {
        const userDoc = new UserModel({
          name: name,
          email: email,
          password: hashPassword,
        });
        const result = await userDoc.save();
        req.session.isLogin = "true" ;
        res.redirect("302", "dashboard");
      } else {
        data.message = "User with this email is already exists !!";
        res.render("registration", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Login User
  static loginUser = async (req, res) => {
    const data = {
      message: "",
    };
    try {
      const { password, email } = req.body;
      const result = await UserModel.findOne({ email: email });
      if (result !== null) {
        const isPassMatch = await bcrypt.compare(password, result.password);
        if (result.email === email && isPassMatch) {
          req.session.isLogin = true;
          res.redirect("dashboard");
        } else {
          data.message = "Email or password incorrect";
          res.render("login", data);
        }
      } else {
        data.message = "Email or password incorrect";
        res.render("login", data);
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserController;
