import express from "express";
import web from "./routes/web.js";
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017" ;

// DB CONNECTION
connectDB(DATABASE_URL)

// MONGODB SESSION
import MongoStore from "connect-mongo" ;
const sessionStorage = MongoStore.create({
   mongoUrl: DATABASE_URL,
   dbName: "school",
   collectionName: "sessions",
   autoRemove: "native",        // disabled, interval
   ttl: 14*24*60*60                      // in seconds
})

// SESSION
import session from "express-session";
app.use(session({
    name: "mysession",
    secret: "iamkeyofthesession",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 500000,
    },
    store: sessionStorage
  })
);



// Static file
app.use("/static", express.static("public"));

// Load routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
