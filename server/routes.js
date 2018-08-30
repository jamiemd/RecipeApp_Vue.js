const Recipe = require("./RecipeModel");

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const STATUS_OKAY = 200;
const STATUS_NOT_FOUND = 404;

module.exports = app => {
  app.get("/api/recipes", (req, res) => {
    console.log("req.body in getrecipes", req.body);
    Recipe.find({})
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(() => {
        res
          .status(500)
          .json({ message: "The information could not be retrieved" });
      });
  });

  app.post("/api/addrecipe", function(req, res) {
    console.log("req.body in addrecipes", req.body);
    const newRecipe = new Recipe(req.body);
    newRecipe.save(function(err, recipe) {
      if (err) {
        res.status(STATUS_USER_ERROR).json({ error: "Error while adding" });
      } else {
        res.status(STATUS_OKAY).json({ recipe: recipe });
      }
    });
  });

  //   app.put("/api/update", function(req, res) {
  //     const { id, newIngredients, newInstructions } = req.body;
  //     Recipe.findById(id, function(err, recipe) {
  //       if (err) throw err;
  //       Recipe.findByIdAndUpdate(
  //         id,
  //         {
  //           ingredients: newIngredients,
  //           instructions: newInstructions
  //         },
  //         { new: true },
  //         function(err, recipe) {
  //           if (err) throw err;
  //           res.status(200).json(recipe);
  //         }
  //       );
  //     });
  //   });
};
