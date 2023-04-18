const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("break_spare_parts")
  .setDescription("Returns what you would get after breaking down the amount of spare parts.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of spare parts to break down.")
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
    scrap = 8 * amount;
    await interaction.editReply(`After you break down ${amount} non-ferrous metal, you would get ${scrap} scrap in return.`);
    await interaction.editReply(`Please let <@!410248634593050627> know what the values are for breaking down spare parts.`)
  }
}