const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("armor_components")
  .setDescription("Returns the materials needed for the amount of armor components wanted.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of armor components needed.")
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

    const armor_components_conversion = {
      ferrous_metal: 28,
      non_ferrous_metal: 9,
      scrap: 37,

      time: 10*60
    }
     amount = interaction.options.getNumber('amount');
    nferrous = armor_components_conversion.non_ferrous_metal * amount;
    spare = armor_components_conversion.spare_parts * amount;
    scap = armor_components_conversion.scrap * amount;
    time = armor_components_conversion.time * amount;
    await interaction.editReply(`To create ${amount} armor components, you need ${nferrous} non-ferrous metal, ${spare} spare parts, and ${scrap} scrap. It will take ${time} minutes/${time/60} hours.`);
  }
}