import { CommandInteraction, SlashCommandBuilder, TextChannel } from "discord.js";
import alerts from "../../services/API/liveMatchAlerts";

export const data = new SlashCommandBuilder()
  .setName("test")
  .setDescription("Sends a message to all currently setup Live-Match-Alert Channels");

export async function execute(interaction: CommandInteraction) {
    const res = await alerts.GetChannels();

    if(res.status != 200)
        return interaction.reply(`There has been an error running the command`);

    const data: any = await res.json();
    data.forEach((id: string) => {
        (interaction.client.channels.cache.get(id) as TextChannel).send('Test!')
    });

    return interaction.reply("Test successful!"); 
}