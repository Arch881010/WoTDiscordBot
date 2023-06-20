const {SlashCommandBuilder} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("permit")
    .setDescription("The resources to create the permit.")
    .addBooleanOption(option =>
      option.setName("private")
      .setDescription("Set response privately?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    ephereal = interaction.options.getBoolean('private') ?? false;
    await interaction.deferReply({ephemeral: ephereal});
    const permit_conversion = {
    suspension_components: 2,
    engine_components: 1,
    tooling: 2,
    fasteners: 8,

    time: "no"
}
    sus = permit_conversion.suspension_components;
    eng = permit_conversion.engine_components;
    tool = permit_conversion.tooling;
    fast = permit_conversion.fasteners;
    time = permit_conversion.time;
    interaction.editReply(`To create the permit, it will take ${sus} suspension components, ${eng} engine components, ${tool} tooling, and ${fast} fasteners. It will take ${time} time (instant).`)
  }
}