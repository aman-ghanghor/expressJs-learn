# Express Application Generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

* 1. npx express-generator --view=ejs myapp
[ejs is template engine]

* 2. npm install

[to run the]
* 3. set DEBUG=myapp:* & npm start  


# Important notes -

* BIN = The bin folder contains the executable file that starts your app. It starts the server (on port 3000, if no alternative 
        is supplied) and sets up some basic error handling.

* PUBLIC = Everything in this folder is accessible to people connecting to application. We can put JavaScript, CSS, images, and
           other assets.

* ROUTES = We can put all our route files. The generator creates two files, index.js and users.js

* VIEWS = The views folder is where we have files used by your templating engine.

* app.js FILE = This file create an express application object (named app, by convention), sets up the application with various 
                setting and middleware, and then exports the app from the module.