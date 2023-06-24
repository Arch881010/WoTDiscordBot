const { ShardingManager } = require('discord.js');
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot is currently online.'))
app.get('/shard', (req, res) => res.send("Shards: 0(1)"))
app.get('/status.json', (req, res) => res.send('{"status":"Online"}'))
app.listen(port, () => console.log());

const manager = new ShardingManager('./bot.js', {
  token: process.env['token'],
  totalShards: "auto",
  respawn: true
});

manager.on('shardCreate', shard => {
  console.log(`Shard ${Number(shard.id)} has been spawned!`);
});
manager.on('death', (process) => {
  console.log(`${process.id} has died.`)
  //if (process.exitCode === null) {
  //   console.log("It died with a 'null' exit.");
  // }
})
manager.on("shardDisconnect", (event) => {
  console.log(`${event.id} has disconnected.`)
})
manager.spawn({ shards: "auto" });