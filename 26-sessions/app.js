import express from "express";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || 8000;

// Session
import session from "express-session";

app.use(
  session({
    name: "mysession",
    secret: "iamkeyofthesession",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 500000,
    },
  })
);

// Static file
app.use("/static", express.static("public"));

// Load routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
