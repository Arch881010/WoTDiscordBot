const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
  .setName("help")
  .setDescription("Gives the list of commands and what they do.")
    .addBooleanOption(option =>
      option.setName("private")
        .setDescription("Make response privately?")),
  async execute(interaction) {
    if(!interaction.member.roles.cache.has('1050199235234111498')) {
      interaction.editReply("You are missing the following role(s): SCRLL");
      return;
    }
    private = interaction.options.getBoolean("private");
    await interaction.deferReply({ephemearl:private});
    await interaction.editReply({content:`__List of commands__
    >Main Craftables
    The main 2 tanks, extra, and auction permit.
    /improved_hardening
    Gives the materials needed to craft the improved hardening and how long it takes to craft it.
    /is5
    Gives the materials needed to craft the Is-5(Object 730) and how long it takes to craft it.
    /permit
    Gives the materials needed to craft the auction permit and how long it takes to craft it.
    /wz-111
    Gives the materials needed to craft the WZ-111 and how long it takes to craft it.
    >Scrap Items
    Items that take scrap and only scrap to craft.
    /spareparts
    Gives how much scrap is needed to create the amount of spare parts you provide.
    /ferrousmetal
    Gives how much scrap is needed to create the amount of ferrous metal you provide.
    /nonferrousmetal
    Gives how much scrap is needed to create the amount of non-ferrous metal you provide.
    >Items
    Parts that do not just need scrap to create.
    /armor_components
    Gives how much materials are needed to create the amount of armor components you provide.
    /engine_components
    Gives how much materials are needed to create the amount of engine components you provide.
    /fasteners
    Gives how much materials are needed to create the amount of fasteners you provide.
    /gun_components
    Gives how much materials are needed to create the amount of gun components you provide.
    /suspension_components
    Gives how much materials are needed to create the amount of suspension components you provide.
    /tooling
    Gives how much materials are needed to create the amount of toolings you provide.
`,ephemeral:private});
    await interaction.followUp({content:`    >Break Down
    Breaks down what thing and what you provide.
    > NOT ALL COMMANDS IN THIS SECTION ARE DONE/WILL THROW ERROR.
    /break_armor_components
    Gives how much materials you will get back after breaking down the number you provided of armor components.
    /break_engine_components
    Gives how much materials you will get back after breaking down the number you provided of engine components.
    /break_fasteners
    Gives how much materials you will get back after breaking down the number you provided of fasteners.
    /break_ferrous
    Gives how much materials you will get back after breaking down the number you provided of ferrous metal.
    /break_non_ferrous
    Gives how much materials you will get back after breaking down the number you provided of non-ferrous metal.
    /break_gun_components
    Gives how much materials you will get back after breaking down the number you provided of gun components.
    /break_spare_parts
    Gives how much materials you will get back after breaking down the number you provided of spare parts.
    /break_suspension_components
    Gives how much materials you will get back after breaking down the number you provided of suspension components.
    >Misc
    /battles
    Gives you a link to the current battles.
    /help
    This lovely command!`, ephemearl:private})
  }
}