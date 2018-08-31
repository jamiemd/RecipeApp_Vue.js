const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const db = process.env.MONGODB_URI || "mongodb://localhost/recipes";
const serveStatic = require("serve-static");
const path = require("path");

app.use(cors());
app.use(bodyParser.json());

const Recipe = require("./routes");
Recipe(app);

app.use("/", serveStatic(path.join(__dirname, "/dist")));

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  db,
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
