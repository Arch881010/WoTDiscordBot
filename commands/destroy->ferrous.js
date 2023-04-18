const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("break_ferrous")
  .setDescription("Returns what you would get after breaking down the amount of ferrous metal.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of ferrous metal to break down.")
      .setRequired(true))
  .addBooleanOption(option =>
    option.setName("private")
      .setDescription('Make response private?')),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    private = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral:private});
    amount = interaction.options.getNumber('amount');
    scrap = 3 * amount;
    await interaction.editReply(`After you break down ${amount} ferrous metal, you would get ${scrap} scrap in return.`);
  }
}