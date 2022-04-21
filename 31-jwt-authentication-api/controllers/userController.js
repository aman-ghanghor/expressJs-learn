import jwt from "jsonwebtoken" 
import bcrypt from "bcrypt"

import UserModel from "../models/User.js"
import transporter from "../config/mailConfig.js"



class UserController {
    static getUsers = async (req, res) => {
       res.send("All Users")
    }


    // registration 
    static userRegistration = async (req, res) => {
       console.log(req.body)
       const {name, email, password, password_confirmation, tc} = req.body ;
       const user = await UserModel.findOne({email: email}) ;
       if(user) {
          res.send({"status": "failed", "message": "Email Already Exists!"}) ;
       }
       else {
          if(name && email && password && password_confirmation && (typeof tc)==='boolean' ) {
            // Authentication Start 
            if(password.trim()===password_confirmation.trim()) {
               try {
                   const salt = await bcrypt.genSalt(12)
                   const hashPassword = await bcrypt.hash(password, salt)
                   const doc = UserModel({
                     name: name, 
                     email: email,
                     password: hashPassword,
                     tc: tc
                   })
                   await doc.save() ;
                   const saved_user = await UserModel.findOne({email: email})

                   // Generate JWT Token
                   const token = jwt.sign(
                      {userID: saved_user._id}, 
                      process.env.JWT_SECRET_KEY, 
                      {expiresIn: '5d'}
                   )
                   // send token to client with response
                   res.status(201).send({"status": "success", "message": "Registration Successful!", "token": token})
               }
               catch(error) {
                   console.log(error)
                   res.send({"status": "failed", "message": "Unable to Register user!"})
               }
            }
            else {
              res.send({"status": "failed", "message": "password and password_confirmation doesn't match"})
            }
          } 
          else {
             res.send({"status": "failed", "message": "All fields are required"})
          }  
       }
    }

    // login
    static userLogin = async (req, res) => {
        const {email, password} = req.body ;
        if(email && password) {
           try {
             const user = await UserModel.findOne({email: email})
             console.log(user)
             if (user !== null) {
                const isMatched = await bcrypt.compare(password, user.password)
                if(email===user.email && isMatched) {   
                  // Regenerate JWT Token 
                  const token = jwt.sign({userID: user._id}, process.env.JWT_SECRET_KEY, {"expiresIn": '5d'})
                  res.send({"status": "success", "message": "Login Succesfully", "token": token})
                } 
                else {
                  res.send({"status": "failed", "message": "email or password incorrect"})
                }
             } 
             else {
                res.send({"status": "failed", "message": "email or password incorrect"})
             }
           } 
           catch(error) {
             console.log(error) ;
             res.send({"status": "failed", "message": "something went wrong"})
           }
        } 
        else {
            res.send({"status": "failed", "message": "All fields required"})
        }
    }


    // Change User Password
    static changeUserPassword = async (req, res) => {
       const {password, password_confirmation} = req.body ;
       console.log("req.user =", req.user)
       if(password && password_confirmation) {
         if(password === password_confirmation) {
            const salt = await bcrypt.genSalt(12) ;
            // generate hash password
            const newHashPassword = await bcrypt.hash(password, salt)
            const user = await UserModel.findByIdAndUpdate(req.user._id, {password: newHashPassword})
            res.send({"status": "success", "message": "Password changed successfully"}) ;
         } 
         else {
            res.send({"status": "failed", "message": "New password and confirm new password doesn't match !"})
         }
       }
       else {
           res.send({"status": "failed", "message": "All fields are required !"})
       }
    }


    // Get data of logged User
    static loggedUser = async (req, res) => {
        res.send({'user': req.user})
    }


    // send email reset password
    static sendUserPasswordResetEmail = async (req, res) => {
       const {email} = req.body ;
       console.log("email =", email)
       if(email) {
          try {
            const user = await UserModel.findOne({email: email}) ;
            if(user) {
               const secret = user._id + process.env.JWT_SECRET_KEY ;
               const token = jwt.sign({userID: user._id}, secret, {expiresIn: '15m'})
               // frontend link to reset password
               const resetPasswordLink = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}` ;
               // Send mail 
               let info = await transporter.sendMail({
                  from: process.env.EMAIL_FROM,
                  to: "amanghanghoriya3@gmail.com",
                  subject: "Reset Password Link",
                  text: "Hello, follow the link to reset password",
                  html: `<a href=${resetPasswordLink}> reset password </a>`
               })
             
               // response
               res.send({"status": "success", "message": "Password reset email sent. Please check your email.", "info": info})
            }
            else {
               res.send({"status": "failed", "message": "Email doesn't exist !"})
            }
          }
          catch(error){
            console.log(error)
            res.send({"status": "failed", "message": "Unable to send link to reset password"})
          }
       }
       else {
          res.send({"status": "failed", "message": "Email field is required !"})
       }
    }


    // reset password
    static resetUserPassword = async (req, res) => {
       const {password, password_confirmation} = req.body ;
       const {id, token} = req.params ;
       const user = await UserModel.findById(id) ;
       console.log(user)
       const new_secret = user._id + process.env.JWT_SECRET_KEY ;
       try {
         jwt.verify(token, new_secret) ;
         if(password && password_confirmation) {
            if(password===password_confirmation) {
               const salt = await bcrypt.genSalt(12)
               const hashPassword = await bcrypt.hash(password, salt)
               await UserModel.findByIdAndUpdate(user._id, {password: hashPassword}) ;
               res.send({"status": "success", "message": "Password reset successfully"}) 
            } 
            else {
               res.send({"status": "failed", "message": "Password and Confirm New Password doesn't match"}) 
            }
         } 
         else {
            res.send({"status": "failed", "message": "All fields required"})
         }
       }
       catch(error) {
          console.log(error)
          res.send({"status": "failed", "message": "Invalid Token"})
       }
    }



}


export default UserController ;