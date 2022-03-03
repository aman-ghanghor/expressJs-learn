import {join} from "path";

const skillController = (req, res) =>{
    // res.sendFile(join(process.cwd(), "views", "index.html"))
    res.render(join(process.cwd(), "views", "skill"), {title: "Skill"})
}

export {skillController} ;