const Color = "#EE82EE";
const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "stonks",
  aliases: ["stks"],
  category: "Image",
  description: "Return A Stonks Image!",
  usage: "Stonks | <Mention Or ID>",
  run: async (client, message, args) => {

    let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor("#EE82EE")
    .setImage(encodeURI(`https://vacefron.nl/api/stonks?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};