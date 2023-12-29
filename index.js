const { ShardingManager } = require('discord.js');
require('dotenv').config(); 
const express = require('express');
const app = express();
const port = 3099;
app.get('/', (req, res) => res.send('Bot is currently online.'))
app.get('/shard', (req, res) => res.send("Shards: 0(1)"))
app.get('/status.json', (req, res) => res.send('{"status":"Online"}'))
app.listen(port, () => console.log());

const manager = new ShardingManager('./bot.js', {
  token: process.env['token'],
  totalShards: "auto",
  respawn: true
});

const shardList = {};

manager.on('shardCreate', shard => {
  console.log(`Shard ${Number(shard.id)} has been spawned!`);
  var id = shard.id;
  shardList.id = "Alive";
});
manager.on('death', (process) => {
  console.log(`${process.id} has died.`)
  var id = process.id;
  shardList.id = "Dead";
  //if (process.exitCode === null) {
  //   console.log("It died with a 'null' exit.");
  // }
})
manager.on("shardDisconnect", (event) => {
  console.log(`${event.id} has disconnected.`)
})
manager.spawn({ shards: "auto" });