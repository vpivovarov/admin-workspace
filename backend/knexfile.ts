require("ts-node/register");
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      getNewMigrationName: (name: string) => {
        return `${name}.ts`;
      },
      directory: __dirname + "/migrations",
      tableName: "knex_migrations",
      extension: "ts",
    },
    seeds: {
      directory: __dirname + "/seeds/development",
    },
  },
  testing: {
    client: "pg",
    connection: {
      connectionString: "postgres://postgres:password@localhost:5432/aw-db",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds/testing",
    },
  },
};
