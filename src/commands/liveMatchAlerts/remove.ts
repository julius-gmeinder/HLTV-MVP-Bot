import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import alerts from "../../services/API/liveMatchAlerts";

export const data = new SlashCommandBuilder()
  .setName("remove")
  .setDescription("Stop the current channel from receiving Live Match Alerts");

export async function execute(interaction: CommandInteraction) {
  const res = await alerts.Remove(interaction.guildId!);

  if(res.status == 204)
    return interaction.reply(`Live-Match-Alerts have been successfully disabled`);

  return interaction.reply(`There has been an error running the command`);
}