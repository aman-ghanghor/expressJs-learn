import express from "express" ;
const router = express.Router() ;

import studentController from "../controllers/studentController.js"


router.get("/setcookie", studentController.setCookie)
router.get("/getcookie", studentController.getCookie)
router.get("/deletecookie", studentController.deleteCookie) 


export default router ;