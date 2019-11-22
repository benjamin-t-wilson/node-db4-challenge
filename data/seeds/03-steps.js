exports.seed = function(knex, Promise) {
  return knex("steps").insert([
    {
      recipe: 1,
      step_number: 1,
      instructions: "Bring skillet to low/medium heat on stove"
    },
    {
      recipe: 1,
      step_number: 2,
      instructions: "Melt 3 tablespoons of butter in skillet"
    },
    {
      recipe: 1,
      step_number: 3,
      instructions: "Crack 3 eggs into a bowl and whisk to combine"
    },
    {
      recipe: 1,
      step_number: 4,
      instructions:
        "Add eggs to skillet. Agitate bottom gently to move cooked egg aside and let raw egg flow in"
    },
    {
      recipe: 1,
      step_number: 5,
      instructions:
        "Once omelette is nearly solid but still has plenty of runniness, add cheese, fold, remove from heat"
    },
    { recipe: 1, step_number: 6, instructions: "Let cool, and enjoy!" }
  ]);
};
