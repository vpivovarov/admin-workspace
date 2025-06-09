import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("all_endpoints", function (table) {
    table.increments("id").primary();
    table.string("endpoint").notNullable().unique();
    table.string("description").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("all_endpoints");
}
