const Discord = require('discord.js');
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
const embed = new Discord.MessageEmbed()
      .setColor('#EE82EE')
      .setFooter(`Comando feito por: ${message.author.username}`)
      //.setThumbnail("https://cdn.discordapp.com/avatars/820969032672870411/4961319a2151583d4fe2a0bd01037aa5.png?size=2048")
      .setDescription(sayMessage)
  message.channel.send(embed);

};