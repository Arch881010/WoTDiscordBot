const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("Refreshes the bot.")
    .addStringOption(option =>
      option.setName('password')
      .setDescription('Enter the password to restart the bot.')
      .setRequired(true))
    .addIntegerOption(option =>
      option.setName('delay')
      .setDescription('Sets the delay of the bot to be refreshed.')
      .setRequired(false)),
  async execute(interaction) {
    if(interaction.options.getString('password')!=process.env['password']) {
      await interaction.reply({content: "You have entered the wrong password!", ephemeral: true})
    }
    async function die() {
    interaction.client.destroy()
    }
    async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, (ms*60000)));
}
    const delay = interaction.options.getInteger('delay') ?? 0;
    if (delay == 0) text = "right now"
    else text =`in ${delay} minutes`
    await interaction.reply({content:"Restarting the bot " + text +". Will automatically reset and will refresh commands in a few minutes. (Instant to 5 mins)", ephemeral: true});
    await sleep(delay);
    die();
    //const {execSync} = require('child_process');
    //execSync('kill 1');
  }
}