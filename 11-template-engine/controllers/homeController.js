import {join} from "path" ;

const homeController = (req, res) => {
    // res.send("Hi Sonam");
    // res.sendFile(join(process.cwd(), "views", "index.html"));
    // res.render("index");
    res.render("index", {name: "Sonam"})
}


export {homeController}