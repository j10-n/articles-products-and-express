exports.up = function(knex, Promise) {
  return knex.schema.createTable("articles_table", table => {
    table.increments();
    table.string("name");
    table.string("description");
    table.integer("quantity");
  });
};

exports.down = function(knex, Promise) {};
