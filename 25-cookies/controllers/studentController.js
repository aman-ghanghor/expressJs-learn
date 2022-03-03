import {join} from "path" ;

class studentController {
    static setCookie = (req, res) => {
        res.cookie("name", "Rahul")
        res.cookie("cart", 7)
        // res.cookie("name", "Rahul", {maxAge: 5000 })    // delete after 5 second (5000 milliseconds)
        res.sendFile(join(process.cwd(), "views", "index.html")) ;
    }
    static getCookie = (req, res) => {
        const cookies = req.cookies ;
        console.log(cookies) ;
        res.sendFile(join(process.cwd(), "views", "index.html")) ;
    }
    static deleteCookie = (req, res) => {
        res.clearCookie("name") ;
        res.clearCookie("cart") ;
        res.sendFile(join(process.cwd(), "views", "index.html")) ;
    }
}

export default studentController ;