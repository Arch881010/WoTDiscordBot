const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('is5')
    .setDescription('Replies with the items to create the IS-5 (Object 730).')
    .addBooleanOption(option =>
      option.setName("private")
        .setDescription("Make response privately?")),
 async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
  const is_5_conversion = {
    suspension_components: 8,
    armor_components: 12,
    tooling_components: 11,
    fasteners: 14,

    time: 5*24*60,
  }
  private = interaction.options.getBoolean('private');
  await interaction.deferReply({ephemeral: private});
  interaction.editReply({content:`It takes ${is_5_conversion.suspension_components} suspension components, ${is_5_conversion.armor_components} armor components, ${is_5_conversion.tooling_components} tooling, and ${is_5_conversion.fasteners} fasteners to create the IS-5 (Object 730). To create it, it will take ${is_5_conversion.time} minutes/${is_5_conversion.time/60} hours/${is_5_conversion.time/(24*60)} days.`, ephemeral: private})
  }
};