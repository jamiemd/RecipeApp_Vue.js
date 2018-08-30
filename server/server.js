const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

const Recipe = require("./routes");
Recipe(app);

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  "mongodb://localhost/recipes",
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
