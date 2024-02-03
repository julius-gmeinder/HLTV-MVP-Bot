import { CommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("setuptest")
  .setDescription("setuptest");

export async function execute(interaction: CommandInteraction) {
    (interaction.client.channels.cache.get('x') as TextChannel).send('test');
    (interaction.client.channels.cache.get('y') as TextChannel).send('test');
    return interaction.reply("gerne");
}