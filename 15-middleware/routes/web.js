import express from "express" ;
const router = express.Router();
import {homeController} from "../controllers/homeController.js"
import {aboutController} from "../controllers/aboutController.js"

router.get("/", homeController);
router.get("/about", aboutController);
router.get("/about/:id", (req, res)=>{
    res.send(`User with Id=${req.params.id}`)
})

export default router;
