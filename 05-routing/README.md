# ============== Routing ===============

* Routing refers to determine how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

* Each route can have one or more callback functions, which are executed when the route is matched.

*[Syntax]

app.method(path, callback)
app.method(path, [callback1, callback2, ...])
app.method(path, [callback1, callback2, ...], callback)

- NOTE -
# app is an instance of express
# method is an HTTP request method, in lowercase.
# path is a path on the server.
# callback is the function executed when the route is matched

- methods - 
1) GET     -    Retrieve Data
2) POST    -    Create/Insert Data
3) PUT     -    Completely Update Data
4) PATCH   -    Partially Update Data
5) DELETE  -    Delete Data
6) ALL     -    Any HTTP Request Method

- PATH -

Path = Route paths can be strings, string pattern, or regular expressions. 
       
1. Query strings are not part of the route path.
2. The characters ?, +, *, and () are subsets of their regular expression counterparts.
3. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.
4. If you need to use the dollar character($) in a path string, enclose it escaped within ([and]).

www.geekyshows.com/data/$book
app.get("/data/([\$])book", callback)


- CALLBACK - 

1. Callback = Route Callbacks can be in the form of a function, an array of function, or combination of both.

2. You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks

[example-1]
app.get('/student', (req, res)=>{
    res.send("Hello Students")
})
- req => request object
- res => response object
- next => It is indicating the next middleware function

[example-2] 
app.get("/student", (req, res, next)=> { 
      next() 
    },
    (req, res)=>{
       res.send("More than one callback example")
    }
)

[example-3]
const cb1 = (req, res, next) => {
   console.log("First Callback") 
   next() 
}
const cb2 = (req, res, next) => {
   console.log("Second Callback")
   next()
}
const cb3 = (req, res, next) => {
    res.send("An array of callback")
}

app.get("/student", [cb1, cb2, cb3])


[example-4]
app.get("/student", [cb1, cb2], (req, res, next)=>{
   res.send("Combination of Independ function and array of functions)
})

--------------------------------------------------------------

- Example-1
const app = express()
app.get('/', function(req, res){
   res.send('Hello World !') ;
})

- Example-2 
app.post('/', (req, res)=>{
   req.send('Hello World !')
})

- Example-3
app.get('/student/all', (req, res)=>{
   res.send('All Student');
})

- Example-4 
app.put('/student/update', callback) 

- Example-5
app.delete('student/delete', callback)

- Example-6
app.all('/sabkuch', function(req, res, next){
   console.log('Accessing the secret section ...')
   next() // pass control to the next callback
})

app.all('*', requireAuthentication, loadUser)

app.all('/api/*', requireAuthentication) 


------------------------------------------------------------------------
# Chained Route Callbacks

> app.route(path) = It returns an instance of a single route, which you can then use to handle HTTP verbs 
>                   with optional middlewares. Use app.route() to avoid duplicate route names (path name).

- example-1
app.route('/student')
   .get(function(req, res){
      res.send("All Student")
   })
   .post(function(req, res){
      res.send("Add New Student")
   })
   .put(function(req, res){
      res.send("Update Student")
   })


- example-2
app.route('/student')
   .all(function(req, res){
      // run for all HTTP verbs first
   })
   .get(function(req, res){
      res.send("All Student")
   })
   .post(function(req, res){
      res.send("Add New Student")
   })
   .put(function(req, res){
      res.send("Update Student")
   })
