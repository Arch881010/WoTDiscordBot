//global.cache = require('arch881010-cache');
//const frequire = require('import-fresh');
const data = require('./data.json')
const unix = data.unix;
//const unix = require('./zdata.json').unix;
const authroles = data.auth.roles;
global.roles = authroles;
//var authroles = frequire('./data/authroles.json');
global.ready = false;

global.calculateWn8 = function(player) {

}

const fs = require('node:fs');
const path = require('node:path');


const { Collection, Colors, Client, GatewayIntentBits } = require('discord.js');
global.white = Colors.White;
global.red = Colors.Red;
global.green = Colors.Green;
global.black = Colors.Default;
global.aqua = Colors.Aqua;
global.Aqua = aqua;
global.Black = black;
global.Green = green;
global.Red = red;
global.White = white;


require('dotenv').config(); 
const token = process.env['token']
global.client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
}
)
global.frequire = require('import-fresh')
function offse() {
  if (Date.now() < unix && false) {
    return ""
  } else {
    return "off"
  }
}
const offseq = offse()
client.commands = new Collection();
const commandsPath = path.join(__dirname, `${offseq}commands`);
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

var role_str = "";

if (Number(token.length) !== 72) {
  console.log(`ERR. Token did not meet length. Recieved ${token.length} vs 72.`);
  execSync('kill 1');
} else {
  client.login(token);
  console.log("Logged in.");
}
client
  //.on("debug", console.log)
  .on("warn", console.log)