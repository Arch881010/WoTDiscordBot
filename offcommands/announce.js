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
      var last_post;
      try {
        last_post = cache.get(interaction.user.tag);
      } catch (e) {
        last_post = {
          "Command": "Null",
          "Text": "Null",
          "Cooldown": 0
        }
      }
      console.log(last_post.Cooldown,"vs", Date.now());
        if (last_post.Cooldown > Date.now()) {
          if(last_post.Cooldown == 0) {} else {
          await interaction.editReply("You posted not that long ago. Cooldown Expires:" + `<t:${last_post.Cooldown}:R>. Post: <t:${last_post.Post_Date}:t>`);
          return;
      }
        }
      if (!channel.permissionsFor(interaction.guild.members.me).toArray().includes("SendMessages") || !channel.permissionsFor(interaction.guild.members.me).toArray().includes("ViewChannel")) {
        await interaction.editReply("I could not send a message to that channel! <#" + channel + "> was attempted to be posted into!");
        return;
      }
      if (delay != 0) channel.send(`Upcoming annoucement in ${delay} minutes.`);
      await interaction.editReply({ content: `Sucessfully set a delay for ${delay} mins, post in ${channel}, and with the text \`"${text}"\`!`, ephemeral: true });
      cache.add(`${interaction.user.tag}`, `{"Command":"Announce","Text":"${text}","Cooldown": ${Date.now() + 10000}, "Post_Date":${Date.now()}}`);
      await sleep(delay);
      var msg = await channel.send(text);
    } else {
      const reqt = `You do not meet the requirements!\nRequirements are: \n${req[0]} You are in the correct server.\n${req[1]} You have at least one of the following: **(XO/Admin/CO/Combat Officer)**.`;
      interaction.reply({ content: reqt, ephemeral: true })
    }
  }
}