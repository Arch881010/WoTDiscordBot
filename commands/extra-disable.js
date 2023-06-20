const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("disable-season")
    .setDescription('Disables season commands. Requires certain roles/id and a bot restart.'),
  async execute(interaction) {
    await interaction.deferReply({ephemeral: true})
    var req = [":white_check_mark:",":white_check_mark:"]
    if(!interaction.member.roles.cache.has('1050778863472492635') && !interaction.member.roles.cache.has('1010664776705257512') && !interaction.member.roles.cache.has('1010664822288961576')) req[1] = ":x:"
    if(interaction.user.id == "410248634593050627") req[0] = ":white_check_mark:", req[1] = ":white_check_mark:"
    if(req[0] == ":white_check_mark:" && req[1] == ":white_check_mark:") {       
      const fs = require('fs');
      var name = 'zdata.json';
      const jsonchange = {
      "unix":0
      }
      await interaction.editReply({content:`Successifuly disabled season commands!`,ephemeral: true})
      fs.writeFileSync(name, JSON.stringify(jsonchange));
    } else {
      const reqt = `You do not meet the requirements!\nRequirements are: \n${req[1]} You have at least one of the following: **(XO/Admin/CO)**.`
      await interaction.editReply({content: reqt, ephemeral: true})
}
}
}
