# ========== View ============

* views contain the HTML served by your application and separate your [application logic] from your [presentation logic].
  Views are stored in [views] directory.

**Creating view - views/index.html**
   <html>
     <head></head>
     <body>
        <h1>Hello world</h1>
     </body>
   </html>   
   

**Creating Route for View**
   app.get('/', (req, res)=>{
       res.sendFile( join(process.cwd(), "views", "index.html") )
   });

>> NOTE -

1. process.cwd() = process is node's global object, and .cwd() method returns where node is running.

2. res.sendFile() = This is used to transfers the file at the givin path. Sets the Content-Type
                    response HTTP header field based on the filename's extension. Unless the root option is set 
                    in the option object, path must be an absolute path to the file.