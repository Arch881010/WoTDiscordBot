const {SlashCommandBuilder} = require('discord.js');
module.exports = { 
    data: new SlashCommandBuilder()
    .setName("del-stats")
    .setDescription("The user's stats to be deleted")
    .addStringOption(option => 
        option.setRequired(true)
        .setDescription('Username')
        .setName('user')),
  async execute(interaction) {
    await interaction.deferReply();
    return await interaction.editReply("No data being stored.")
    var user = await interaction.options.getString('user');
    await interaction.editReply('Posting Deletion request..')
    var res;
    try{
      var res = await fetch("https://server.arch881010.repl.co/DB/del", {
        "method":"POST",
        "headers": {
          "username":user
        }
      })
    } catch (err) {
      await interaction.editReply(`An error occured:\n${err}`);
      return;
    }
    await interaction.editReply(`Done trying to delete \`${user}\`'s data. Recieved \`${res.status}\` as the return status. (202 - Deleted, 404 - No stats)`);
  }
}