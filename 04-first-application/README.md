# First Express Js Application


* express() = The express() function is a top-level function exported by the express module.

const app = express() ;
* The app returned by express() is in fact a JavaScript Function, designed to be passed to Node's HTTP  
  servers as a callback to handle requests.

* This makes it easy to provide both HTTP and HTTPS versions of your app with the same code base, as the 
  app does not inherit from these.


app.listen() ;
* It binds and listens for connections on the specified host and port.

* If port is omitted or is 0, the operating system will assign an arbitrary unused port, which is useful
  for cases like automated tasks