import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("all_endpoints").del();

  // Inserts seed entries
  await knex("all_endpoints").insert([
    {
      id: 1,
      endpoint: "/api/all_endpoints",
      description: "All available API endpoints",
    },
    { id: 2, endpoint: "/api/socials", description: "Socials list" },
    { id: 3, endpoint: "/api/users", description: "Users list" },
  ]);
}
