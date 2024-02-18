import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("socials", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.boolean("connected").notNullable();
    table.string("icon").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("socials");
}
