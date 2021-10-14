const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://imgur.com/HNmdowJ.png',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);


let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('MÓ PAZ')
        .setColor('#EE82EE')
        .setDescription(`mó paz ${message.author}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Deus Poze <3')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}