const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');


exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})


  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  let likes = db.fetch(`like_${user.id}`);
  if(likes === null) like = 0;
  const embed = new Discord.MessageEmbed()
  .setTitle('💖 Likes!')
  .setDescription(`${user} tem ${likes} likes!`)
  .setColor('#EE82EE')
  message.channel.send(embed)
  
}