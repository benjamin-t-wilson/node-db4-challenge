exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "Egg" },
    { ingredient_name: "Butter" },
    { ingredient_name: "Cheese" }
  ]);
};
