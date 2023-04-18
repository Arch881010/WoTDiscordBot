const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { 
  token: process.env['token'],
  totalShards: "auto",
  respawn: true
});

manager.on('shardCreate', shard => {
  console.log(`Shard ${Number(shard.id)} has been spawned!`);
    try{
    var x = cache.get('maxShards');
    cache.update('maxShards', x + 1);
    }catch(err){}
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
try {
cache.delete('maxShards');
manager.spawn({shards:"auto"});
} catch(e){
  console.log("Failed to delete 'maxShards'");
  manager.spawn({shards:"auto"});
}