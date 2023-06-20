const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { 
  token: process.env['token'],
  totalShards: "auto",
  respawn: true
});

manager.on('shardCreate', shard => {
  console.log(`Shard ${Number(shard.id)} has been spawned!`);
});
manager.on('death', (process)=> {
  console.log(`${process.id} has died.`)
 //if (process.exitCode === null) {
//   console.log("It died with a 'null' exit.");
// }
})
manager.on("shardDisconnect", (event) => {
  console.log(`${event.id} has disconnected.`)
})
manager.spawn({shards:"auto"});