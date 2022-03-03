# ============== Middleware ===============

* Middleware functions are functions that have access to the request object (req), the response object (res),
  and the next function in the application's request-response cycle.

* The next function is a function in the Express router which, when invoked, executes the middleware 
  succeeding the current middleware.


>> Middleware function can perform the following tasks:
<!-- 

1. Excecute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware in the stack.

-->



# ------------- Creating Middleware -------------

**{ in app.js }**
app.use(function(req, res, next){
    console.log("Logged");
    next();
})

**{ in routes/student.js }**
app.use(function(req, res, next){
    console.log("Logger");
    next();
})



>> Example

- middlewares/logger-middleware.js
var myLogger = function(req, res, next) {
    console.log("Logged");
    next();
}
export default myLogger ;

- app.js
import myLogger from './middlewares/logger-middleware.js' ;
app.use(myLogger);



# ================== Using Middleware ====================
1. Application Level Middleware
2. Router Level Middleware



# 1. Application Level Middleware :-

- Bind application-level middleware to an instance of the app object by using the app.use() and 
  app.METHOD() function, where METHOD is the HTTP method of the request that the middleware function
  handles(such as GET, PUT, or POST) in lowercase.

- A middleware function with no mount path. The function is executed every time the app receive a request.


# 2. Router/Route Level Middleware :-

- Router-level middleware works in the same way as application-level middleware, except it is bound 
  to an instance of express.Router().

- A middleware function with no mount path. The function is executed every time the app receives 
  a request. 

[example-1]
router.use(function(req, res, next){
   console.log("Logged");
   next();
})

[example-2]
router.use(function(req, res, next){
   console.log("Logged 1");
   next();
}, function(req, res, next){
   console.log("Logged 2");
   next();
})




**{ Built-in Middleware }**

<express.static>      =   serves static assets such as images, css so on
<express.json>        =   parses incoming requests with JSON payloads.
<express.urlencoded>  =   parses incoming requests with URL-encoded payloads



**{ Third Party Middleware }**

- Use third-party middleware to add functionality to Express apps.
ex-  npm install cookie-parser

import cookieParser from "cookie-parser"
// load the cookie-parsing middleware