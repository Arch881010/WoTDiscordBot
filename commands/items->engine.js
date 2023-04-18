const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('engine_components')
  .setDescription('Returns the amount of items for the amount of engine components wanted.')
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of engine components wanted.")
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
    const engine_components_conversion = {
    non_ferrous_metal: 4,
    spare_parts: 7,
    scrap: 14,

    time: 2*60,
}
    amount = interaction.options.getNumber('amount');
    nferrous = engine_components_conversion.non_ferrous_metal * amount;
    spare = engine_components_conversion.spare_parts * amount;
    scap = engine_components_conversion.scrap * amount;
    time = engine_components_conversion.time * amount;
    await interaction.editReply(`To create ${amount} engine components, you need ${nferrous} non-ferrous metal, ${spare} spare parts, and ${scrap} scrap. It will take ${time} minutes/${time/60} hours.`);
  }
}