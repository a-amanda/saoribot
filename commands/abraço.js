const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {



  let channels = db.get(`channels_${message.guild.id}`)
if(!channels) channels = []
if(channels.some(a => message.channel.id === a)) return message.lineReply(`**Não é permitido usar comandos nesse chat**`).then(m => m.delete({timeout: 30000})).catch(a => {})



var list = [
  'https://i.pinimg.com/originals/4e/25/75/4e25754b0f2aea16f2d2d599d09ae6f0.gif',
  'https://i.pinimg.com/originals/6e/6e/53/6e6e53fb69d7b74286c9d2817e1fc3ca.gif',
  'https://i.pinimg.com/originals/a8/f2/f6/a8f2f612ab90fec87a14e4266d04b812.gif',
  'https://i.pinimg.com/originals/4d/aa/87/4daa87a634e1faeee0bb78fbe0f8abca.gif',
  'https://i.pinimg.com/originals/a6/dc/d6/a6dcd6dd094b686e69cecdd634607aa6.gif',
  'https://i.pinimg.com/originals/bb/84/1f/bb841fad2c0e549c38d8ae15f4ef1209.gif',
  'https://i.pinimg.com/originals/8d/67/06/8d67066616331a8c661cb64c14ac6e62.gif',
  'https://i.pinimg.com/originals/4d/f5/a8/4df5a85b8045792d1acdb727777108dd.gif',
  'https://miro.medium.com/max/1307/1*xn6dDPa5EmVAxOSQusvO7g.gif',
  'https://i.pinimg.com/originals/5a/ac/62/5aac6270d9c29bb8c590c8d8c8162a21.gif',
  'https://pa1.narvii.com/6305/7d4ab5572a02d3bfa8a0495e1f4e8b626e94ea04_hq.gif',
  'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif',
  'https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif',
  'https://i.pinimg.com/originals/5e/25/c6/5e25c639195b917d556f127da65d0c07.gif',
  'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_hq.gifc',
  'https://thumbs.gfycat.com/AlertWideAfricanporcupine-size_restricted.gif',
  'https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838169003092475944/gif_154.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191162720387122/gif_143.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191163667120168/gif_124.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191226561363998/gif_140.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191227097710654/gif_171.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191364969594920/gif_127.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191365707923467/gif_139.gif',
  'https://cdn.discordapp.com/attachments/798574104751374356/838191366315835412/gif_151.gif'
];


var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um abraço!');
}
/*
message.lineReply(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Abraço')
        .setColor('#EE82EE')
        .setDescription(`${message.author} acaba de dar um abraço em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Um abraço quentinho')
        .setAuthor(message.author.tag, avatar);
  await message.lineReply(embed);
}
