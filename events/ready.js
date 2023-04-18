const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    client.user.setActivity('for commands', {type:ActivityType.Watching});
    client.user.setStatus('idle');
    global.ready = true;
    client.user.setUsername('WoT Part Converter');
  }
}