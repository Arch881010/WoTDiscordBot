const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("break_armor_components")
  .setDescription("Returns what you would get after breaking down the amount of armor components.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of armor components to break down.")
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
    scrap_conv = 0;
    scrap = scrap_conv * amount;
    await interaction.editReply(`After you break down ${amount} armor components, you would get ${scrap} scrap in return.`);
    await interaction.editReply("Data not found, please provide <@!410248634593050627> (as I cannot ping him) details of breaking down an armor component.");
  }
}