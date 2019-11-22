const db = require("./dbConfig.js");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  db.select(
    "ingredients.ingredient_name",
    "shoppingList.quantity",
    "shoppingList.measuring_unit"
  )
    .from("ingredients")
    .join("shoppingList", "shoppingList.ingredient_id", "ingredients.id")
    .where({ recipe_id: id });
}

function getInstructions(id) {
  db.select("steps.step_number", "steps.instructions")
    .from("steps")
    .where({ recipe: id });
}

module.exports = {
  getRecipes,
  getInstructions,
  getShoppingList
};
