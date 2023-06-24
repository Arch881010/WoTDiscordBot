async function refcommands() {
  const { REST, Routes } = require('discord.js');
  const clientId = process.env['clientId'];
  const guildId = process.env['guildId'];
  const token = process.env['token'];
  const clanguildId = "840747115718115369" //process.env['clanguildId'];
  //https://discord.com/oauth2/authorize?client_id=1075983048367149067&scope=bot%20applications.commands&permissions=2048
  //GET UNIX HERE: https://currentmillis.com/
  const testing = false;
  const unix = require('./zdata.json').unix;
  const url = require('./xdata.json');
  function seasonname() {
    if (Date.now() < unix) {
      const seasonN = "War Gods";
      return seasonN
    } else {
      const seasonN = "None";
      return seasonN
    }
  }
  const fs = require('node:fs');

  season = seasonname();
  const commands = [];
  // Grab all the command files from the commands directory you created.
  console.log('-------------------')
  console.log('>Commands<')

  if (season != 'None') {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      commands.push(command.data.toJSON());
      console.log('-------------------')
      console.log(commands[commands.length-1].name);
    }
  } else {
    const commandFiles = fs.readdirSync('./offcommands').filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
      const command = require(`./offcommands/${file}`);
      commands.push(command.data.toJSON());
      console.log('-------------------')
      console.log(commands[commands.length-1].name);
    }
    console.log('-------------------')
  }


  // Construct and prepare an instance of the REST module
  const rest = new REST({ version: '10' }).setToken(token);
  // and deploy your commands!
  (async () => {
    try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);

      // The put method is used to fully refresh all commands in the guild with the current set
      if (testing == true) {
        const data = await rest.put(
          Routes.applicationGuildCommands(clientId, guildId),
          { body: commands },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands locally.`);
      } else if (testing == "SCRLL") {
        const data = await rest.put(
          Routes.applicationGuildCommands(clientId, clanguildId),
          { body: commands },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands to SCRLL`)
      } else {
        const data = await rest.put(
          Routes.applicationCommands(clientId),
          { body: commands },
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands globally.`);
      }
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  })();
}
refcommands();