const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
  .setName("owner")
  .setDescription("Rudely pings Arch1010#4338"),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050778863472492635') && !interaction.member.roles.cache.has('1010664776705257512') && !interaction.member.roles.cache.has('1010664822288961576')/* || interaction.user.id == "410248634593050627"*/) {
      interaction.editReply("You need at least one of the following roles to ping! (XO/Admin/CO) :x:");
      return;
    }
    interaction.reply("<@!410248634593050627> has been pinged.")
  }
}