const {SlashCommandBuilder} = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName('tooling')
  .setDescription("Gives the required materials for the given wanted amount of tooling.")
  .addNumberOption(option =>
    option.setName("amount")
      .setDescription("The amount of tooling")
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
   
    const tooling_conversion = {
      ferrous_metal: 10,
      spare_parts: 6,
      scrap: 17,
    
      time: 8*60
    }
    amount = interaction.options.getNumber('amount');
    ferrous = tooling_conversion.ferrous_metal * amount;
    spare = tooling_conversion.spare_parts * amount;
    scrap = tooling_conversion.scrap * amount;
    time = tooling_conversion.time * amount;
        await interaction.editReply(`To create ${amount} tooling, you need ${ferrous} ferrous metal, ${spare} spare parts, and ${scrap} scrap. It will take ${time} minutes/${time/60} hours.`);
  }
}