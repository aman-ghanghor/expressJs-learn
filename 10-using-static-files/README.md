# ============ Static Files ===========

**CSS files, JavaScript files, image files, video files etc are considered as static files in Express JS.**

1. CSS files
2. JavaScript files
3. Image files
4. Video files

* To serve static files such as images, CSS files, and JavaScript files, use the [express.static] built-in
  middleware function in Express.

Syntax :
        express.static(root, [options])

Example: 
        app.use(express.static('public'))

http://localhost:3000/css/style.css




* The path that you provide to the express.static function is relative to the directory from where you 
  launch your node process. If you run the express app from another directory, it's safer to use the 
  absolute path of the directory that you want to serve.

app.use("/static", express.static(join(process.cwd(), "public")))


NOTE-

[options] = It is a object
> example :
const options = {
    dotfiles: "ignore",
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: 'Id',
    redirect: false,
    setHeaders: function(res, path, stat){
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static('public', options));

*NOTE - dotfiles .*
"allow" = No special treatment for dotfiles.
"deny"  = Deny a request for a dotfile, respond with 403, then call next().
"ignore" = Act as if the dotfile does not exist, respond with 404, then call next()
- note: With the default value, it will not ignore files in a directory that begins with a dot.