"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
async function up(knex) {
    await knex.schema.createTable("socials", function (table) {
        table.increments("id").primary();
        table.string("name").notNullable().unique();
        table.boolean("connected").notNullable();
        table.string("icon").notNullable();
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTable("socials");
}
exports.down = down;
//# sourceMappingURL=20240215141753_add_socials_table.js.map