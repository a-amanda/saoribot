const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.channel.send(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://i.pinimg.com/originals/a6/cf/60/a6cf6026b72b63fb130d7e942438c2ba.gif',
  'https://i.pinimg.com/originals/ed/aa/02/edaa0291d8256c093aad44c4e11e1ca5.gif',
  'https://i.pinimg.com/originals/e0/87/b4/e087b4009b86ae22de8a0d442669f162.gif',
  'https://i.pinimg.com/originals/8f/c3/84/8fc38483c5c8b6b74d112208543e23a0.gif',
  'https://pa1.narvii.com/6457/ef21d3fe6324b364aa23f0d398aec3190dda0b6a_hq.gif',
  'https://i.pinimg.com/originals/7b/15/5e/7b155ec23f333ef6b56f33d4623d3105.gif',
  'https://2img.net/h/31.media.tumblr.com/dddf8e06a5602a93043becc684aeb14b/tumblr_mqgavvn4ok1qk1jkwo2_400.gif',
  'https://i.pinimg.com/originals/b4/12/e7/b412e74d9b56045e17a13f33758296f8.gif',
  'https://pa1.narvii.com/6089/b2a3c2c2e31d659c5976ed805730cf933bec9a62_hq.gif',
  'https://i.pinimg.com/originals/24/f5/db/24f5dbeacbbf3b146cef0d8ef7b7fe0c.gif',
  'https://media.giphy.com/media/oXsxBHcF5xEUE/giphy.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para poder matar!');
}
/*
message.channel.send(`${message.author.username} **acaba de socar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Soco')
        .setColor('#EE82EE')
        .setDescription(`${message.author} Deu um soco em  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('TOMA ISSO BOBOQUINHA')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}