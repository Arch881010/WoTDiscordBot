const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName("re-enablecmds")
    .setDescription('Re-enables season commands. Requires certain roles/id and a bot restart.')
    .addStringOption(option =>
      option.setName('date')
      .setDescription('Changes the date based on (year-month-day). Eg. 2022-10-10')
      .setRequired(true)),
  async execute(interaction) {
    if(interaction.member.id != "4102486345930506270") {
      await interaction.reply("Only Arch can do this.")
      return;
    }
    await interaction.deferReply({ephemeral: true})
      const fs = require('fs');
      var name = 'zdata.json';
      var time = new Date(interaction.options.getString('date'));
      const jsonchange = {
      "unix":Number(time)
      }
      await interaction.editReply({content:`Successifuly changed to ${interaction.options.getString('date')}!`,ephemeral: true})
      fs.writeFileSync(name, JSON.stringify(jsonchange));

}
}
