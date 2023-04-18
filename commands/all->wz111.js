const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('wz-111')
    .setDescription('Replies with the items to create the wz.')
    .addBooleanOption(option =>
      option.setName("private")
        .setDescription("Set response privately?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    const wz_111_conversion = {
      gun_components:26,
      armor_components:6,
      tooling:5,
      fasteners:10,

      time: ((6*24)+20)*60,
    }
    private = interaction.options.getBoolean("private") ?? false;
    await interaction.deferReply({ephemeral: private});
    interaction.editReply({content:`It takes ${wz_111_conversion.gun_components} gun components, ${wz_111_conversion.armor_components} armor components, ${wz_111_conversion.tooling} tooling, and ${wz_111_conversion.fasteners} fasteners to create the WZ-111. It will also take ${wz_111_conversion.time} minutes/${wz_111_conversion.time/60} hours/6 days and 20 hours.`})
  }
};