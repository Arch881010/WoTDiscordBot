const {SlashCommandBuilder} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
  .setName("battles")
  .setDescription("Sends the battles for the clan."),
  async execute(interaction) {
    await interaction.deferReply();
    if (typeof stupidVariable == "undefined" ) {await interaction.editReply("disabled"); return;}
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    url = "https://na.wargaming.net/globalmap/#battles/1000063539"
    await interaction.editReply(`${url} is the link to the current battles.`)
  }
}