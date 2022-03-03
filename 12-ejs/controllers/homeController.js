import path from "path";

const homeController = (req, res)=>{
    // res.send("Hello world")
    // res.sendFile(path.join(process.cwd(), "views", "index.html"))

    // Using EJS template engine
    const data = {
        name: "Sonam",
        city: "Delhi"
    }
    res.render('index', data)

}

export {homeController}