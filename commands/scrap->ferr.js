const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ferrousmetal')
    .setDescription('Replies with the scrap to non ferrous metal conversions.')
    .addIntegerOption(option =>
      option.setName('ferrous-metal')
        .setDescription('Amount of ferrous metal needed.')
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
    scrap = process.env['scrap->ferr'] * Number(interaction.options.getInteger('ferrous-metal'));
    interaction.reply({content:`It takes ${scrap} scrap to create ${interaction.options.getInteger('ferrous-metal')} ferrous metal.`,ephemeral:ephstatus});
  },
};