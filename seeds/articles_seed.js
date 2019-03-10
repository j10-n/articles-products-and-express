exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles_table")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("articles_table").insert([
        {
          name: "dino burger",
          description: "issa burger that has that good ol' juicy dino meat!",
          quantity: 3
        },
        {
          name: "beef balls",
          description:
            "grab yourself some of the beefiest balls with our famous soup",
          quantity: 8
        },
        {
          name: "boop",
          description: "boop pa dee boop boop",
          quantity: 3431
        }
      ]);
    });
};
