const {SlashCommandBuilder} = require('discord.js');
module.exports = { 
    data: new SlashCommandBuilder()
    .setName("refresh-all-stats")
    .setDescription('Refreshes Clans Stats'),
  async execute(interaction) {
    await interaction.deferReply({ephemeral: true});
    if(interaction.user.id != "4102486345930506270") {
      await interaction.editReply("Only Arch can do this!");
      return;
    }
    var data = await fetch('https://api.worldoftanks.com/wot/clans/info/?application_id=f83742cd66a540b80eb504162a3c516c&clan_id=1000065705&fields=leader_name%2C+members.account_name');
    data = await data.json();
    data = data['data']['1000065705'];
    for (user of data['members']) {
    user = user['account_name']
    console.log(`Refreshing ${user}.` );
    const channel = client.channels.cache.get("1108197950422794380");
    channel.send({content:`Refreshing ${user}!`})
    }
  await interaction.editReply({content:"Done refreshing people.", ephemeral:true})
}
}



/*
  // Fetch all roles from the guild
message.guild.roles.fetch()
  .then(roles => console.log(`There are ${roles.size} roles.`))
  .catch(console.error);

// Fetch a single role
message.guild.roles.fetch('222078108977594368')
  .then(role => console.log(`The role color is: ${role.color}`))
  .catch(console.error);
*/