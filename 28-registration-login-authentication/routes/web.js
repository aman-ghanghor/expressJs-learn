import express from "express";
const router = express.Router() ;

import UserController from "../controllers/userController.js"


router.get("/", UserController.home)
router.get("/registration", UserController.registration)
router.get("/login", UserController.login)
router.get("/dashboard", UserController.dashboard) ;

router.post("/registration", UserController.createUser)
router.post("/login", UserController.loginUser) ;

export default router ;