const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    client.user.setActivity('for commands', {type:ActivityType.Watching});
    client.user.setStatus('idle');
    client.user.setUsername('WoT Part Converter');
    //try{
      //cache.get('ready')
      //cache.update('ready', `{"time":${Date.now()}, "status": "idle", "activity":"Watching for comamnds"}`)
    //} catch(err){
    //cache.add("ready", `{"time":${Date.now()}, "status": "idle", "activity":"Watching for comamnds"}`)
    //}
    global.ready = true;
  }
}