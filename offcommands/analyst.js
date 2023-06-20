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
      await interaction.editReply(`User \`${user}\` does not exist, are you sure you typed the username correctly?`);
      return;
    }
    var lastChecked;
    try {
      lastChecked = cache.get(user);
      throw new Error('break')
    } catch (err) {
      var tempDate = new Date();
      lastChecked = tempDate.getTime();
    }
    cache.update(user, Date.now());
    //console.log(results);
    var formattingSavior;
    var checkerUser;
    var lastChecked;
    try {
    checkerUser = cache.get((results['misc']['nickname']+'checkedU'));
    lastChecked = cache.get((results['misc']['nickname']+'checkedT'));
    } catch(err) {
      checkerUser = 'N/A';
      lastChecked = Date.now();
    }
    cache.update((results['misc']['nickname'] + 'checkedU'), interaction.user.tag);
    cache.update((results['misc']['nickname'] + 'checkedT'), Date.now());
    //Last Checked: <t:${lastChecked}:R>
    if(results['change']['spotted'] === null) {
       const channel = client.channels.cache.get("1108197950422794380");
    channel.send({content:`Added new user as \`${results['misc']['nickname']}\``})
      formattingSavior = 
`__Current Stats for ${results['misc']['nickname']}__
Average Damage Blocked: ${results['new']['avg_damage_blocked']}
Win Rate: ${""+((results['new']['wr']*100)) + "%"}
Hit Rate: ${"" + ((results['new']['hitrate'])*100) + "%"}
Last battle: <t:${results['misc']['last_battle_time']}:R>
Last Time Logged Out: <t:${results['misc']['logout_at']}:R>
https://tomato.gg/stats/NA/${results['misc']['nickname']}=${results['misc']['player_id']}
`
    }
    else {
      if(results['new']['battles']==0) {
        await interaction.editReply(`Does ${results['misc']['nickname']} exist on WoT?\nhttps://tomato.gg/stats/NA/${results['misc']['nickname']}=${results['misc']['player_id']}`);
        console.log(`https://tomato.gg/stats/NA/${results['misc']['nickname']}=${results['misc']['player_id']}`)
        return;
      }
      if(results['change']['battles'] == 0) {
        formattingSavior =
`__Current Stats for ${results['misc']['nickname']}__
Average Damage Blocked: ${results['new']['avg_damage_blocked']}
Win Rate: ${""+((results['new']['wr']*100)) + "%"}
Hit Rate: ${"" + (((results['new']['hitrate'])*100)) + "%"}
__Misc__
Last battle: <t:${results['misc']['last_battle_time']}:R>
Last Time Logged Out: <t:${results['misc']['logout_at']}:R>
https://tomato.gg/stats/NA/${results['misc']['nickname']}=${results['misc']['player_id']}`;
      } else {
        var spotted = results['change']['spotted'];
        var dmgBlckd = results['change']['avg_damage_blocked'];
        var wr = ((results['change']['wr']*100))
        var battles = results['change']['battles'];
        var hitrate = ((results['change']['hitrate']*100));
        if(spotted > 0) {
          spotted = "+" + spotted;
        }
        if(dmgBlckd > 0) {
          dmgBlckd = "+" + dmgBlckd
        }
        if(wr > 0) {
          wr = "+" + wr + "%";
        } else {
          wr = wr + "%";
        }
        if (hitrate > 0) {
          hitrate = "+" + hitrate + "%";
        } else {
          hitrate = hitrate + "%";
        }
    formattingSavior =
`__Current Stats for ${results['misc']['nickname']}__
Average Damage Blocked: ${results['new']['avg_damage_blocked']}
Win Rate: ${""+(Math.floor(results['new']['wr']*100)) + "%"}
Hit Rate: ${"" + (((results['new']['hitrate'])*100)) + "%"}
__Misc__
Last battle: <t:${results['misc']['last_battle_time']}:R>
Last Time Logged Out: <t:${results['misc']['logout_at']}:R>
Last Person to Check: ${checkerUser}
https://tomato.gg/stats/NA/${results['misc']['nickname']}=${results['misc']['player_id']}`;
    }
    }
    await interaction.editReply(formattingSavior)
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