const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  
  'https://pa1.narvii.com/7206/c54beec6c9087fdd3cb619ffc66d1d83de4106acr1-600-333_hq.gif',
  'https://pa1.narvii.com/7206/2f6cec79eb25bd109638ba76e975d049252e077cr1-600-338_hq.gif',
  'https://i.pinimg.com/originals/4c/c7/8d/4cc78d8693aff61ee1335c3504256e63.gif',
  'https://i.pinimg.com/originals/2d/82/70/2d82700102503160e30ada3f6ed7e431.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atacar!');
}
/*
message.lineReply(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Ataque')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de atacar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Só tem gif do levi pq ele é um deus.')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}