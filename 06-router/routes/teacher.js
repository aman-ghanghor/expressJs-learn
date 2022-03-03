import express from "express" ;

const router = express.Router() ;


// teacher routes
router.get("/all", (req, res)=>{
    res.send("All teacher")
})
router.post("/create", (req, res)=>{
    res.send("Add New teacher")
})
router.put("/update", (req, res)=>{
    res.send("Update the teacher")
})
router.delete("/delete", (req, res)=>{
    res.send("Delete the teacher")
})


// exporting router
export default router ;