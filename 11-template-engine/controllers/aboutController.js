import {join} from "path" ;

const aboutController = (req, res) => {
    res.sendFile(join(process.cwd(), "views", "about.html"));
}


export {aboutController}