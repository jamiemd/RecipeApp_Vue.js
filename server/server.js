const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 8000;
const serveStatic = require("serve-static");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

app.use("/", serveStatic(path.join(__dirname, "/dist")));

const Recipe = require("./routes");
Recipe(app);

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
const heroku =
  "mongodb://heroku_z8qnwn5t:l3b75qqo029o1104skbp31t9cd@ds239682.mlab.com:39682/heroku_z8qnwn5t";
const local = "mongodb://localhost/recipes";

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  heroku,
  { useNewUrlParser: true }
);

connect.then(
  () => {
    const port = 8000;
    app.listen(port);
    console.log(`Server Listening on ${port}`);
  },
  err => {
    console.log("Could not connect to MongoDB");
  }
);
