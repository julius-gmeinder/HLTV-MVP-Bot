import { Client, Guild } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands/commands";
import { config } from "./config";
import { AddGuildToDB, DeleteGuildFromDB, RefreshGuildsInDB } from "./services/API/guilds";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", async () => {

    // Refresh commands in 2 test guilds
    //
    // (async () => {
    //   await deployCommands({guildId: config.DISCORD_DEV_GUILD_ID_1});
    //   await deployCommands({guildId: config.DISCORD_DEV_GUILD_ID_2});
    // })()

    await RefreshGuildsInDB(client.guilds.cache.map(x => x.id));

    console.log("Discord bot is ready! 🤖");
});

client.on("guildCreate", async (guild) => {
  await AddGuildToDB(guild.id);
  await deployCommands({ guildId: guild.id });
});

client.on("guildDelete", async (guild) => {
  await DeleteGuildFromDB(guild.id);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand())
    return;

  const { commandName } = interaction;
  if (commands[commandName as keyof typeof commands])
    commands[commandName as keyof typeof commands].execute(interaction);
});

client.login(config.DISCORD_TOKEN);