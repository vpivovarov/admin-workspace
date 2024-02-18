import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Check if socials already exist
  const social1Exists = await knex("socials").where("name", "facebook").first();
  const social2Exists = await knex("socials").where("name", "twitter").first();

  // If both socials do not exist, insert them
  if (!social1Exists) {
    await knex("socials").insert({
      name: "facebook",
      connected: false,
      icon: "",
    });
  }

  if (!social2Exists) {
    await knex("socials").insert({
      name: "twitter",
      connected: false,
      icon: "",
    });
  }
}
