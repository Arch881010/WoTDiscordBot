const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("owner")
    .setDescription("Rudely pings Arch"),
  async execute(interaction) {
    //await interaction.reply("disabled");
    //return;
    await interaction.reply("<@!410248634593050627> **has been pinged.**");        
    }
  }