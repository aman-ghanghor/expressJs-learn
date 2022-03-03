# ================ Mongoose ===================

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

* npm i mongoose


# ---------- Connect MongoDB using Mongoose ----------

<connect()> = Mongoose requires a connection to a MongoDB database. You can connect to a locally hosted database with mongoose.connect()

- Syntaxt -
        connect(uri, options, callback) ;

[uri]       =   It's a String used as connection uri.
[options]   =   It's an object passed down to the MongoDB driver's connect() function.
[callback]  =   It's a callback function.


<!-- Examples -->

      1.  mongoose.connect("mongodb://localhost:27017/schooldb) ;

      2.  mongoose.connect("mongodb://localhost:27017/schooldb", {
             useNewUrlParser: true,
             useUnifiedTopology: true
          })

      3.
          const options = {
             useNewUrlParser: true,
             useUnifiedTopology: true
          }
          mongoose.connect("mongodb://localhost:27017/schooldb", options)


- other properties of options object :-

user = It's String
pass = It's String
dbName = It's String
authSource = It's a String
autoIndex = It's Boolean


Example :-
<!-- 
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: "geekyshows",
        pass: "pass123",
        dbName: "schooldb",
        authSource: "schooldb"
    }
    
    mongoose.connect("mongodb://localhost:27017", options)

-->