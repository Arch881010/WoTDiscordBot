const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("break_fasteners")
  .setDescription("Returns what you would get after breaking down the amount of fasteners.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of fasteners to break down.")
      .setRequired(true))
  .addBooleanOption(option =>
    option.setName("private")
      .setDescription('Make response private?')),
  async execute(interaction){
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    private = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral:private});
    amount = interaction.options.getNumber('amount');
    scrap_conv = 34;
    spare_conv = 1;
    ferrous_conv = 1;
    scrap = scrap_conv * amount;
    spare = spare_conv * amount;
    ferrous = ferrous_conv * amount;
    await interaction.editReply(`After you break down ${amount} fastener(s), you would get ${scrap} scrap, ${spare} spare part(s), and ${ferrous} ferrous metal in return.`);
  }
}