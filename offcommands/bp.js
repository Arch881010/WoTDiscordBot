const {SlashCommandBuilder} = require('discord.js');
const bp1N = "Sandstorm";
const bp2N = "Southern Cross";
const bp3N = "Dune Road";
module.exports = { 
    data: new SlashCommandBuilder()
    .setName("total-points")
    .setDescription("Sends remaining requested by the user.")
    .addNumberOption(url => url.setName('points')
        .setDescription('The amount of points you have earned. (Chapter = 2,500 points per)')
        .setRequired(false)),
  async execute(interaction) {
    await interaction.deferReply(); 
      var pointstotal = process.env['bptotal']
    var userpoints = interaction.options.getNumber('points');
    var reqcomp = pointstotal - userpoints;
    await interaction.editReply(`You need ${reqcomp} points to complete the entire battle pass!`);

    //console.log(pointstotal);
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