const {SlashCommandBuilder} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
  .setName('suspension_components')
  .setDescription("Gives the required materials per given suspension components needed.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("Amount of suspension components required.")
      .setRequired(true))
  .addBooleanOption(option =>
    option.setName("private")
      .setDescription("Make response private?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    private = interaction.options.getBoolean("private") ?? false;
    await interaction.deferReply({ephemeral:private})
    const suspension_components_conversion = {
      spare_parts: 7,
      scrap: 100,
      ferrous_metal: 9,
    }
    amount = interaction.options.getNumber('amount')
    spare = suspension_components_conversion.spare_parts * amount;
    scrap = suspension_components_conversion.scrap * amount;
    ferrous = suspension_components_conversion.ferrous_metal * amount;

    interaction.editReply(`To create ${amount} suspension components, you need ${spare} spare parts, ${ferrous} ferrous metal, and ${scrap} scrap.`)
  }
}