const Discord = require('discord.js');
const db = require("quick.db");

exports.run = async (bot, message, args) => {

  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://i.kym-cdn.com/photos/images/newsfeed/001/419/178/242.gif',

  'https://pa1.narvii.com/6274/a38fbce5e34e70bf5fb0befe33dc0c0462bde62a_hq.gif',

  'https://pa1.narvii.com/6638/4c9f8871e839384ec89afc3830855006ffb185fb_hq.gif',

  'https://2.bp.blogspot.com/-s-LkiQMr63s/XE8jbICxB_I/AAAAAAAAZxM/yEzFpT5s0rgyQBWRgbAJnBb_48wDhVXYQCLcBGAs/s640/tumblr_peqb2imlNp1xc5ua3o1_540.gif',

  'https://i.pinimg.com/originals/cf/79/04/cf79041f0d6d0660b36e85da53983719.gif',
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

if (!user) {
return message.lineReply('lembre-se de mencionar um usuário válido para poder matar!');
}

if (user == bot.user) {
  return message.lineReply(`Nossa ${message.author}, eu não te fiz nada e é isso que você me faz? Lembrarei disso!.`);
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Assasinato')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de matar  ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Assasino frio e calculixta')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}