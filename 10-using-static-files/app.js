import express from "express";
import web from "./routes/web.js"
import {join} from "path" ;

const app = express() ;
const port = process.env.PORT || 8000 ;

// Static Files  
// app.use(express.static("public")) ;                                  // provide relative path of public
app.use(express.static(join(process.cwd(), "public")))                // provide absolute path of public - a better way
//app.use("/static", express.static(join(process.cwd(), "public")))     // create virtual path "/static" which will serve static file

// serve only specific static files
/*
app.use("/photo", express.static(join(process.cwd(), "public/image")))
app.use("/css", express.static(join(process.cwd(), "public/css")))
app.use("/js", express.static(join(process.cwd(), "public/js")))
*/

// managing dot files - using options parameter
/*
const options = {
    dotfiles: "allow",    // default "ignore"
    etag: false,
    extensions: ['htm', 'html', 'css'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat){
        res.set('x-timestamp', Date.now())
    }
}
app.use("/static", express.static(join(process.cwd(), "public"), options)) ;
*/


// Load routes
app.use("/", web) ;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})


