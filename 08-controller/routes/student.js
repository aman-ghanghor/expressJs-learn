import express from "express";
// import controller
import {allStudent, deleteStudent} from "../controllers/studentController.js" ;

// instance of Router class
const router = express.Router() ;


router.get("/all", allStudent)
router.get("/delete/:id([0-9]{2})", deleteStudent)


// module.exports = router ;
export default router ;