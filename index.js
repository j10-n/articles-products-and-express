const knex = require("./database");

knex
  .select()
  .from("articles_table")
  .then(articles_table => {
    console.log(articles_table);
    process.exit();
  });
