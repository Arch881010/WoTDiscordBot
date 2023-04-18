const {SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with the bot's ping."),
  async execute(interaction){
    await interaction.deferReply({ephemeral: true});
    const pingEmbed = new EmbedBuilder()
      .setColor(aqua)
      .setTitle('Bot\'s ping')
      .setDescription('Pong!')
      .addFields(
  		{ name: 'Bot Latency', value: `${Date.now()- interaction.createdTimestamp}ms.`, inline: true },
  		{ name: 'Api Latency', value: `${Math.round(client.ws.ping)}ms.`, inline: true },
	     )
      .setTimestamp()
    await interaction.editReply({embeds: [pingEmbed], ephemeral: true});
    //await interaction.editReply({content:`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.`})
  }
}