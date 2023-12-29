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
  var ck1 = false;
  if (!command) return;
  var role_str = "";
  for (role in roles){
    var rolecheck = interaction.member.roles.cache.some(r => r.name === roles[role]);
    role_str += `${role},`
      if(rolecheck) {
        ck1 = true;
      }
    }
  var ck2 = interaction.member.id == "410248634593050627";
  if(ck1 == false && ck2 == false) {
    await interaction.reply(`You do not have a role matching ${role_str} and you are not the owner.`);
    //var fs = require('node:fs');
    //try {
      //var data = cache.get('blocked');
      //data[`${interaction.user.tag}`] = `{"time":${new Date.now()}}`
      //cache.update('blocked',data);
    //} catch(err) {
      //cache.add('blocked', `{"${interaction.user.tag}":{"time":${new Date.now()}}`);
    //}
    return;
  }
  try {
    //console.log(command, 'is being used.')
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.editReply({ content: 'There was an error while executing this command! ERR! Please ping <@!410248634593050627> (as I cannot ping him). Error\n ' + error, ephemeral: true });
  }
}
//});

}