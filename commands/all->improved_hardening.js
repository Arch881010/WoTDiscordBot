const {SlashCommandBuilder} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
  .setName("improved_hardening")
  .setDescription("Gets the parts to create the improved hardening.")
  .addBooleanOption(option => 
  option.setName("private")
    .setDescription("Make response private?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    private = interaction.options.getBoolean("private");
    await interaction.deferReply({ephemeral: private});
    const improved_hardening_conversion = {
      suspension_components: 30,
      engine_components: 20,
      tooling: 2,
      fasteners: 5,

      time: 2*60,
    }
    sus = improved_hardening_conversion.suspension_components;
    eng = improved_hardening_conversion.engine_components;
    tooling = improved_hardening_conversion.tooling;
    fasteners = improved_hardening_conversion.fasteners;
    time = improved_hardening_conversion.time;
    await interaction.editReply(`To create the improved hardening, it takes ${sus} suspension components, ${eng} engine components, ${tooling} tooling, and ${fasteners} fasteners. It will take ${time} minutes/${time/60} hours.`)
  }
}