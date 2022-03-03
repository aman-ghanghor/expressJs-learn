import {join} from "path" ;

const homeController = (req, res) =>{
    // res.send("<h1>Home Page</h1>")
    res.sendFile(join(process.cwd(), "views", "index.html"))
}

export default homeController ;