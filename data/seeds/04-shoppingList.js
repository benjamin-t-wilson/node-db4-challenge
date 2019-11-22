exports.seed = function(knex, Promise) {
  return knex("shoppingList").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 3, measuring_unit: "large" },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: 3,
      measuring_unit: "tablespoons"
    },
    { recipe_id: 1, ingredient_id: 3, quantity: 0.25, measuring_unit: "cups" }
  ]);
};
