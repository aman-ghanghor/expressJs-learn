import {join} from "path";

const aboutController = (req, res) =>{
    // res.send("<h1>About Page</h1>")
    res.sendFile(join(process.cwd(), "views", "about.html"))
}

export default aboutController ;