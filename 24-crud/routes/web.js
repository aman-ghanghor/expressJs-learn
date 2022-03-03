import express from "express" ;
const router = express.Router() ;

import homeController from "../controllers/studentController.js" ;

router.get("/", homeController.getAllDoc ) ;
router.post("/", homeController.createDoc ) ;
router.get("/edit/:id", homeController.editDoc) ;
router.post("/update/:id", homeController.updateDoc) ;
router.post("/delete/:id", homeController.deleteDoc)

export default router ;