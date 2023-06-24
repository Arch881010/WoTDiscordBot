const { SlashCommandBuilder } = require('discord.js')
module.exports = {
  data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("Announces a text.")
    .addStringOption(option =>
      option.setName('input')
        .setDescription("The text to annouce.") 
        .setMaxLength(2000)
        .setRequired(true))
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('The channel to announce into')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName("delay")
        .setDescription("The amount to delay in MINUTES (if any).")),
  async execute(interaction) {
    async function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, (ms * 60000)));
    }
    var req = [":white_check_mark:", ":white_check_mark:"]
    if (!interaction.member.roles.cache.has('1050778863472492635') && !interaction.member.roles.cache.has('1010664776705257512') && !interaction.member.roles.cache.has('1010664822288961576') && !interaction.member.roles.cache.has(`1050267498920026153`)) req[1] = ":x:"
    if (interaction.guild.id != '840747115718115369') req[0] = ":x:"
    if (interaction.user.id == "410248634593050627") req[0] = ":white_check_mark:", req[1] = ":white_check_mark:"
    if (req[0] == ":white_check_mark:" && req[1] == ":white_check_mark:") {
      const delay = interaction.options.getInteger('delay') ?? 0;
      const channel = interaction.options.getChannel('channel');
      const text = interaction.options.getString('input');
      await interaction.deferReply({ ephemeral: true });
      if (!channel.permissionsFor(interaction.guild.members.me).toArray().includes("SendMessages") || !channel.permissionsFor(interaction.guild.members.me).toArray().includes("ViewChannel")) {
        await interaction.editReply("I could not send a message to that channel! <#" + channel + "> was attempted to be posted into!");
        return;
      }
      await interaction.editReply({ content: `Sucessfully set a delay for ${delay} mins, post in ${channel}, and with the text \`"${text}"\`!`, ephemeral: true });
      await sleep(delay);
      var msg = await channel.send(text);
    } else {
      const reqt = `You do not meet the requirements!\nRequirements are: \n${req[0]} You are in the correct server.\n${req[1]} You have at least one of the following: **(XO/Admin/CO/Combat Officer)**.`;
      interaction.reply({ content: reqt, ephemeral: true })
    }
  }
}