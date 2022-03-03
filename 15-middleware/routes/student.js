import express from "express" ;
import myLogger from "../middlewares/logger-middleware.js";
const router = express.Router();

import {studentController} from "../controllers/studentController.js" ;



// Router Level Middleware - available for this router only
// router.use(myLogger);              // availabe for all path of this router e.g. = /student/....
router.use('/exam', myLogger)         // available form path = /student/exam/....



router.get("/", studentController) ;
router.get(`/exam`, (req, res)=>{
    res.send("Student Exam Page")
})
router.get("/class/:cls", (req, res)=>{
    res.send(`<h2>students of class ${req.params.cls}</h2>`)
})




export default router;
