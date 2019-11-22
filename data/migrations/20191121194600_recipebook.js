exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.text("recipe_name").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.text("ingredient_name").notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl
        .integer("recipe")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.text("instructions").notNullable();
    })
    .createTable("shoppingList", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.float("quantity").notNullable();
      tbl.text("measuring_unit").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("shoppinglist")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
