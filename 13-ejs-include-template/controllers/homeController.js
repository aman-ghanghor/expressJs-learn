import path from "path";

const homeController = (req, res) => {
    // res.send("Hello world")
    // res.sendFile(path.join(process.cwd(), "views", "index.html"))
    res.render(path.join(process.cwd(), "views", "index.ejs"), {title: "Home"})
}

export {homeController};
