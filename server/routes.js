const Recipe = require("./RecipeModel");

// reference: https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const STATUS_OKAY = 200;
const STATUS_NOT_FOUND = 404;

module.exports = app => {
  app.get("/api/recipes", (req, res) => {
    // console.log("req.body in getrecipes", req.body);
    Recipe.find({})
      .then(result => {
        res.status(200).json(result);
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "The information could not be retrieved" });
      });
  });

  app.post("/api/add-recipe", function(req, res) {
    console.log("req.body in addrecipes", req.body);
    const newRecipe = new Recipe(req.body);
    newRecipe.save(function(err, result) {
      if (err) {
        res.status(STATUS_USER_ERROR).json({ error: "Error while adding" });
      } else {
        res.status(STATUS_OKAY).json({ recipe: result });
      }
    });
  });

  app.put("/api/update-recipe", function(req, res) {
    console.log("req.body in update", req.body);
    Recipe.findOneAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          name: req.body.name,
          ingredients: req.body.ingredients,
          instructions: req.body.instructions
        }
      },
      { new: true }
    )
      .then(result => {
        res.status(STATUS_OKAY).json({ message: "Recipe Deleted" });
      })
      .catch(error => {
        res.status(STATUS_USER_ERROR).json({ message: "Updated Failed" });
      });
  });

  app.delete("/api/delete-recipe", function(req, res) {
    console.log("req.body in delete", req.body);
    Recipe.findOneAndRemove(req.body._id)
      .then(result => {
        res.status(STATUS_OKAY).json({ message: "Recipe Deleted" });
      })
      .catch(error => {
        res.status(STATUS_USER_ERROR).json({ message: "Delete Failed" });
      });
  });
};
