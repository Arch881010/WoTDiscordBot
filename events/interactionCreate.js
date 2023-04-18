const { Events } = require('discord.js');

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
  if(ready == false) return;
  var blockedUsers = [];
  if (blockedUsers.includes(interaction.user.id)) {
    await interaction.reply({content:"You have been banned from this bot!", ephemeral: true});
    return;
  }
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  //console.log(command, "is being used.")
  if (!command) return;
  global.ck1 = false;
  for (role in roles){
    var rolecheck = interaction.member.roles.cache.some(r => r.name === roles[role]);
      if(rolecheck) {
        global.ck1 = true;
      }
    }
  var ck2 = interaction.member.id == "410248634593050627";
  if(ck1 == false && ck2 == false) {
    await interaction.reply("You do not have the role named \"SCRLL\" or you are not the owner.");
    return;
  }
  try {
    //console.log(command, 'is being used.')
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.editReply({ content: 'There was an error while executing this command! ERR! Please ping <@!410248634593050627> (as I cannot ping him).', ephemeral: true });
  }
}
//});

}