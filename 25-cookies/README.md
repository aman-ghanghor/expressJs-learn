# ============ cookie-parser ============

- cookie-parser is a middleware which parses cookies attached to the client request object.

- Parse Cookie header and populate [req.cookies] with an object keyed by the cookie names.

npm i cookie-parser

example -
<!-- 
   import cookieParser from "cookie-parser" ;
   app.use(cookieParser()) ;
-->



__---------- res.cookie() -----------__

res.cookie() = It is used to set cookie name to value. The value parameter may be a string or object converted to JSON.
- sytanx 
<!-- 
    res.cookie(name, value, [, options]) ;
 -->

- Example 
<!-- 
   res.cookie("username", "geekyshows") 

   res.cookie("cart", 5)

   res.cookie("cart", {item: [1, 2, 3]}) 

   res.cookie("username", "geekyshows", {maxAge: 5000})  // milliseconds

   res.cookie("username", "geekyshows", { expires: new Date(Date.now() + 900000), httpOnly: true }  )

   res.cookie( "username", "geekyshows", {path: "/admin"} )
-->




__---------- res.cookies -----------__

req.cookies = This property is used to get cookies.

When using cookie-parser middleware, this property is an object that contains cookies sent by the request.
If the request contains no cookies, it defaults to {}.

- example 
<!-- 
   req.cookies ;

   req.cookies.username;

   req.cookies.cart;
-->




__---------- res.clearCookie() -----------__

res.clearCookie() = It is used to Clears the cookie specified by the name.

Web browser and the other compliant clients will only clear the cookie if the given options is identical to 
those given to res.cookie(), excluding expires and maxAge.

- Syntax 
<!-- 
   res.clearCookie(name, [,options])
-->

- Example
<!-- 
   res.clearCookie("username")
-->

- Example
<!-- 
   res.cookie("username", "geekyshows", {path: "/admin"}) 

   res.clearCookie("username", {path: "/admin"})
-->