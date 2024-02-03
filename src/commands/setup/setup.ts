import { CommandInteraction, ModalSubmitInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("setup")
  .setDescription("setup");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply(`ChannelId ${interaction.channelId}`);
}