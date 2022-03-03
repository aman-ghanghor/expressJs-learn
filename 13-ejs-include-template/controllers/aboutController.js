import path from "path";

const aboutController = (req, res) => {
    // res.send("Hello world")
    //  res.sendFile(path.join(process.cwd(), "views", "about.html"))
    res.render(path.join(process.cwd(), "views", "about"), {title: "About"})
}

export {aboutController};
