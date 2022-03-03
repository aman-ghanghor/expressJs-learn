import {join} from "path";

const homeController = (req, res) =>{
    // res.sendFile(join(process.cwd(), "views", "index.html"))
    res.render(join(process.cwd(), "views", "home"), {title: "Home"})
}

export {homeController} ;