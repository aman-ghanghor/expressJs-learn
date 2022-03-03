import express from "express" ;
const router = express.Router() ;

import UserController from "../controllers/userController.js";


router.get("/", UserController.showAllData) ;
router.get("/:id", UserController.showSingleDataById) ;
router.post("/", UserController.createData) ;
router.put("/:id", UserController.updateDataById);
router.delete("/:id", UserController.deleteDataById) ;


export default router ;