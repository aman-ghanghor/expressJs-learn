import express from "express" ;

// creating instance of Router class
const router = express.Router() ;

// routes
router.get("/all", (req, res)=>{
    res.send("All student")
})
router.post("/create", (req, res)=>{
    res.send("Add New Student")
})
router.put("/update", (req, res)=>{
    res.send("Update the student")
})
router.delete("/delete", (req, res)=>{
    res.send("Delete the student")
})


// exporting module

// module.exports = router ;
export default router ;