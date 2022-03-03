import express from "express" ;
const router = express.Router() ;

import StudentController from "../controllers/studentController.js"


router.get("/", StudentController.session_example) ;
router.get("/getSessionInfo", StudentController.get_session_info)
router.get("/deleteSession", StudentController.delete_session)
router.get("/regenerateSession", StudentController.regenerate_session)




export default router ;