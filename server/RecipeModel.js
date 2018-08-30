const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/recipes",
  { useNewUrlParser: true }
);

const RecipeSchema = new mongoose.Schema({
  ingredients: {
    type: Array,
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
