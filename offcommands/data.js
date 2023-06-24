//Last Time Checked: <t:${lastChecked}:R>
const {SlashCommandBuilder} = require('discord.js');
module.exports = { 
    data: new SlashCommandBuilder()
    .setName("stats")
    .setDescription("The user to fetch stats.")
    .addStringOption(option => 
        option.setRequired(true)
        .setDescription('Username')
        .setName('user')),
  async execute(interaction) {
    await interaction.deferReply();
    var user = await interaction.options.getString('user');
    var results = await fetch(`https://server.arch881010.repl.co/stats/${user}`, {
      "headers":{
        "src":`WOTDiscordBot | ${interaction.user.tag}`
      }
    });
    try {
    results = await results.json();
    } catch(err) {
      await interaction.editReply(`The user (\`${user}\`) may not exist, are you sure you typed the username correctly? (API returned error.)`);
      return;
    }
    //results.
    console.log(results)
    var changes = "";
    if(typeof results['changes']['battles'] != "undefined" && results['changes']['battles']!=0){
      changes = `
__Changes__
Battles: ${results['changes']['battles']}
Winrate: ${(results['changes']['wr'])*100}%
Hit-Rate: ${(results['changes']['hitrate'])*100}%\n`
    }
    await interaction.editReply(`Player Stats for \` ${results['player']['player_nick']}\`
Battles: ${results['stats']['battles']}
Winrate: ${(results['stats']['wr'])*100}%
Hit-Rate: ${(results['stats']['hitrate'])*100}%
${changes}__Misc__
Last battle: <t:${results['timeData']['lastBattle']}:R>
Last Time Logged Out: <t:${results['timeData']['lastLogout']}:R>
https://tomato.gg/stats/NA/${results['player']['player_nick']}=${results['player']['player_id']}
`)

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