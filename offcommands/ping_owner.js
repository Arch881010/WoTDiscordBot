const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Rudely pings Arch1010#4338"),
  async execute(interaction) {
    await interaction.reply("disabled");
    return;
    await interaction.reply("<@!410248634593050627> **has been pinged.**");        
    }
  }