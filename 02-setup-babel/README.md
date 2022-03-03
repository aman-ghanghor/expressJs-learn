# setup babel with express

[step-1]: install :-
        
        @babel/cli
        @babel/core
        @babel/preset-env


[step-2]: create .babelrc file in root directory and write:

        {
          "presets": ["@babel/preset-env"]
        }


[step-3]: create following script in package.json

        FOR PRODUCTION :-
        "build": "babel index.js --out-dir prd",
        "start": "npm run build && nodemon prd/index.js",
        "serve" "node prd/index.js   

        FOR DEVELOPMENT
        "start": "babel index.js -w --out-dir prd",
        "dev-serve": "nodemon prd/index.js",

        <!-- development compile directory -->
        "start": "babel directoryName -w --out-dir prd",                   
        "dev-serve": "nodemon prd/index.js"

