const { SlashCommandBuilder } = require("discord.js")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("notice")
    .setDescription("Notice"),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply("There is no cw season currently. If you wish for commands to be re-enabled again, please let <@!410248634593050627> know.");
  }
}