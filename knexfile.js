// Update with your config settings.
require("dotenv").config();
// console.log(process.env);
module.exports = {
  client: "pg",
  connection: {
    port: process.env.POSTGRES_HOST_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
