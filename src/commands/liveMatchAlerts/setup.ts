import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { SetupLiveMatchAlert } from "../../services/API/liveMatchAlerts";

export const data = new SlashCommandBuilder()
  .setName("setup")
  .setDescription("Setup the current channel to receive Live Match Alerts!");

export async function execute(interaction: CommandInteraction) {
  const res = await SetupLiveMatchAlert({guildId: interaction.guildId!, liveMatchAlertChannelId: interaction.channelId!});

  if(res.status == 204)
    return interaction.reply(`Live-Match-Alerts have been successfully setup!`);

  if(res.status == 409)
    return interaction.reply(`A channel in this server has already been setup! Use /remove and try again!`);

  return interaction.reply(`There has been an error running the command`);
}