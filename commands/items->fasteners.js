const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('fasteners')
    .setDescription('Gives the required materials to create the amount of wanted fasteners.')
    .addIntegerOption(option =>
      option.setName('amount')
        .setDescription('Amount of fasteners needed.')
        .setAutocomplete(false)
        .setRequired(true))
    .addBooleanOption(option =>
      option.setName("private")
        .setDescription("Set response privately?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    const fasteners_conversion = {
    ferrous_metal: 5,
    non_ferrous_metal: 2,
    spare_parts: 4,

    time: 4*60 // MINS
}
    
    ephstatus = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral: ephstatus});
    amount = interaction.options.getInteger('amount');
    item1 = fasteners_conversion.ferrous_metal * amount;
    item2 = fasteners_conversion.non_ferrous_metal * amount;
    item3 = fasteners_conversion.spare_parts * amount;
    time = fasteners_conversion.time * amount;
    await interaction.editReply({content:`It takes ${item1} ferrous metal, ${item2} non ferrous metal, and ${item3} spare parts to create ${amount} fasteners. To make them, it will take ${time} minutes/${time/60} hours.`, ephemeral: ephstatus});
  },
};