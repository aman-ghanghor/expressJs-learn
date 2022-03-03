# ====== Router =======

* Router class is used to create modular, mountable route handlers.

* A Router instance is a complete middleware and routing system.

* Every Express application has a built-in app router.

steps- 

>> 1) Create Router Module - routes/students.js

>> 2) Create Router instance
        const router = express.Router() 

>> 3) Define Routes using router object
        router.get('/', function(req, res){
            res.send("Hello world")
        })

>> 4) Export router
        module.exports = router 
        [or]
        export default router ;

>> 5) Import Router Module in app.js
        const stu = require("./students.js")
        
>> 6) Load Router Module
        app.use("/vidyarthi", stu)



# ------- app.use() method -------

*** It mounts the specified middleware function or functions at the specified path: the middleware function is *** executed when the base of the requested path matches path. ***

Syntaxt -
      app.use([path], [callback1, callback2, ...], callback) 
