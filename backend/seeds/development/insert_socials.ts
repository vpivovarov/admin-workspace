import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("socials").del();

  // Check if socials already exist
  const facebookExists = await knex("socials")
    .where("name", "facebook")
    .first();
  const twitterExists = await knex("socials").where("name", "twitter").first();
  const instagramExists = await knex("socials")
    .where("name", "instagram")
    .first();
  const linkedinExists = await knex("socials")
    .where("name", "linkedin")
    .first();
  const youtubeExists = await knex("socials").where("name", "youtube").first();
  const tiktokExists = await knex("socials").where("name", "tiktok").first();
  const twitchExists = await knex("socials").where("name", "twitch").first();
  const discordExists = await knex("socials").where("name", "discord").first();
  const redditExists = await knex("socials").where("name", "reddit").first();

  // If both socials do not exist, insert them
  if (!facebookExists) {
    await knex("socials").insert({
      name: "facebook",
      connected: false,
      icon: "",
    });
  }

  if (!twitterExists) {
    await knex("socials").insert({
      name: "twitter",
      connected: false,
      icon: "",
    });
  }

  if (!instagramExists) {
    await knex("socials").insert({
      name: "instagram",
      connected: false,
      icon: "",
    });
  }

  if (!linkedinExists) {
    await knex("socials").insert({
      name: "linkedin",
      connected: false,
      icon: "",
    });
  }

  if (!youtubeExists) {
    await knex("socials").insert({
      name: "youtube",
      connected: false,
      icon: "",
    });
  }

  if (!tiktokExists) {
    await knex("socials").insert({
      name: "tiktok",
      connected: false,
      icon: "",
    });
  }

  if (!twitchExists) {
    await knex("socials").insert({
      name: "twitch",
      connected: false,
      icon: "",
    });
  }

  if (!discordExists) {
    await knex("socials").insert({
      name: "discord",
      connected: false,
      icon: "",
    });
  }

  if (!redditExists) {
    await knex("socials").insert({
      name: "reddit",
      connected: false,
      icon: "",
    });
  }
}
