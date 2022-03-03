import {join} from "path";

const servicesController = (req, res) =>{
    // res.sendFile(join(process.cwd(), "views", "index.html"))
    res.render(join(process.cwd(), "views", "services"), {title: "Services"})
}

export {servicesController} ;