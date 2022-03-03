import {join} from "path";

const homeController = (req, res) =>{
    res.render(join(process.cwd(), "views", "home")) ;
}

export {homeController} ;