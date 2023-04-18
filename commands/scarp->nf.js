const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('nonferrousmetal')
    .setDescription('Replies with the scrap to non ferrous metal conversions.')
    .addIntegerOption(option =>
      option.setName('non-ferrous-metal')
        .setDescription('Amount of non ferrous needed.')
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
    ephstatus = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral:ephstatus});    
    scrap = process.env['scrap->non_ferr'] * Number(interaction.options.getInteger('non-ferrous-metal'));
    interaction.editReply({content:`It takes ${scrap} scrap to create ${interaction.options.getInteger('non-ferrous-metal')} non-ferrous metal.`, ephemeral:epstatus})
  },
};