import express from "express";
import web from "./routes/web.js";
import connectDB from "./db/connectdb.js";
const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// include model
import {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocByFieldSpecificField,
  getLimitedDoc,
  getSkipDoc,
  getDocCount,
  getSortedDoc,
  mixDoc,
  compDoc,
  logDoc
} from "./model/Student.js";

// Database Connection
connectDB(DATABASE_URL);
// getAllDoc() ;
// getAllDocSpecificField() ;
// getSingleDoc();
// getSingleDocSpecificField() ;
// getDocByField();
// getDocByFieldSpecificField() ;
// getLimitedDoc()
// getSkipDoc() ;
// getDocCount() ;
// getSortedDoc() ;
// mixDoc() ;
// compDoc()
logDoc() ;



// Setup ejs
app.set("view engine", "ejs");

// Static files
app.use("/static", express.static("public"));

// load routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
