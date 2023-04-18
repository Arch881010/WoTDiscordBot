const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("break_gun_components")
  .setDescription("Returns what you would get after breaking down the amount of gun components.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of gun components to break down.")
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
    await interaction.editReply(`After you break down ${amount} gun components, you would get ${scrap} scrap in return.`);
    await interaction.editReply(`Please let <@!410248634593050627> know the conversions. This command has not gotten the data yet.`)
  }
}