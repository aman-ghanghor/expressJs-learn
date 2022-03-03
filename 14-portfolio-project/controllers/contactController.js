import {join} from "path";

const contactController = (req, res) =>{
    // res.sendFile(join(process.cwd(), "views", "index.html"))
    res.render(join(process.cwd(), "views", "contact"), {title: "Contact"})
}

export {contactController} ;