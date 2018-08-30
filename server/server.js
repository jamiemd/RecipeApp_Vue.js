const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

const Recipe = require("./routes");
Recipe(app);

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
