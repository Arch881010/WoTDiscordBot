const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("gun_components")
  .setDescription("Gives the required materials for the given wanted amount of gun components.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of gun components wanted.")
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
    
    const gun_components_conversion = {
      ferrous_metal: 13,
      non_ferrous_metal: 5,
      spare_parts: 7,

      time: 4*60,
    }
    amount = interaction.options.getNumber('amount');
    ferrous = gun_components_conversion.ferrous_metal * amount;
    nferrous = gun_components_conversion.non_ferrous_metal* amount;
    spare = gun_components_conversion.spare_parts * amount;
    time = gun_components_conversion.time * amount;
    await interaction.editReply(`To create ${amount} gun components, you need ${ferrous} ferrous metal, ${nferrous} non-ferrous metal, and ${spare} spare parts. It will take ${time} minutes/${time/60} hours.`);
  }
}