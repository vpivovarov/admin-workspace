import { Knex } from "knex";

require("ts-node/register");
require("dotenv").config();
const fs = require("fs").promises;

const config: Knex.Config = {
  client: "pg",
  connection: async () => {
    try {
      const pathToPassword = "/app/secrets/db-password.txt";
      const dbPassword = await fs.readFile(pathToPassword, "utf8");

      return {
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        port: 5432,
        password: dbPassword.trim(),
        database: process.env.POSTGRES_DB,
      };
    } catch (error) {
      console.error("Error reading database password:", error);
      throw error;
    }
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: __dirname + "/migrations",
    tableName: "knex_migrations",
    extension: "ts",
  },
  seeds: {
    directory: __dirname + "/seeds/development",
  },
};

export default config;
