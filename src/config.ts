import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_DEV_GUILD_ID_1, DISCORD_DEV_GUILD_ID_2 } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_DEV_GUILD_ID_1 || !DISCORD_DEV_GUILD_ID_2) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_DEV_GUILD_ID_1,
  DISCORD_DEV_GUILD_ID_2
};