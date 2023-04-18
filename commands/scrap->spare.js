const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('spareparts')
    .setDescription('Replies with the scrap to spare parts conversions.')
    .addIntegerOption(option =>
      option.setName('spare-parts')
        .setDescription('Amount of spare parts needed.')
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
    emphstatus = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral: emphstatus});
    scrap = process.env['scrap->spare'] * Number(interaction.options.getInteger('spare-parts'));
    interaction.editReply({content:`It takes ${scrap} scrap to create ${interaction.options.getInteger('spare-parts')} spare part(s).`, ephemeral:emphstatus})
  },
};